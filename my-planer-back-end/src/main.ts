import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	// app.setGlobalPrefix('api');

	// eslint-disable-next-line @typescript-eslint/no-unsafe-call
	app.use(cookieParser());

	app.enableCors({
		// Исправлено: убраны лишние пробелы
		origin: ['http://localhost:3000', 'https://1planer.stage-dream.tech'],
		credentials: true,
	});

	// Убедись, что сервер слушает на всех интерфейсах
	await app.listen(process.env.PORT ?? 4200, '0.0.0.0');
}
bootstrap();