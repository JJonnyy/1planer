'use client'

import Link from 'next/link'
import React from 'react'

import { DASHBOARD_PAGES } from '@/config/pages-url.config'

export default function Home() {
	return (
		<main className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-navy-900'>
			<div className='container mx-auto px-4 py-16'>
				<div className='flex flex-col items-center justify-center space-y-8 text-center'>
					<h1 className='text-5xl font-bold text-gray-900 dark:text-white'>
						Welcome to <span className='text-primary'>Planner</span>
					</h1>

					<p className='max-w-2xl text-xl text-gray-600 dark:text-gray-300'>
						Organize your life, boost your productivity, and achieve your goals
						with our intuitive planning tools.
					</p>

					<div className='mt-8 flex flex-col sm:flex-row gap-4'>
						<Link
							href={DASHBOARD_PAGES.HOME}
							className='inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-white bg-primary hover:bg-primary/90 transition-colors duration-200'
						>
							Go to Dashboard
						</Link>

						<Link
							href='/features'
							className='inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-primary border border-primary hover:bg-primary/10 transition-colors duration-200'
						>
							Explore Features
						</Link>
					</div>

					<div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8'>
						{/* Feature Cards */}
						<div className='p-6 bg-white dark:bg-navy-800 rounded-xl shadow-sm'>
							<div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4'>
								<svg
									className='w-6 h-6 text-primary'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
									/>
								</svg>
							</div>
							<h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
								Task Management
							</h3>
							<p className='mt-2 text-gray-600 dark:text-gray-300'>
								Create, organize, and track your tasks with ease.
							</p>
						</div>

						<div className='p-6 bg-white dark:bg-navy-800 rounded-xl shadow-sm'>
							<div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4'>
								<svg
									className='w-6 h-6 text-primary'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
									/>
								</svg>
							</div>
							<h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
								Calendar View
							</h3>
							<p className='mt-2 text-gray-600 dark:text-gray-300'>
								Visualize your schedule and plan ahead effectively.
							</p>
						</div>

						<div className='p-6 bg-white dark:bg-navy-800 rounded-xl shadow-sm'>
							<div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4'>
								<svg
									className='w-6 h-6 text-primary'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
									/>
								</svg>
							</div>
							<h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
								Progress Tracking
							</h3>
							<p className='mt-2 text-gray-600 dark:text-gray-300'>
								Monitor your goals and celebrate achievements.
							</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
