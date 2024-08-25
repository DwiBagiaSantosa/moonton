import React from 'react'
import Authenticated from '@/Layouts/Authenticated/Index'
import PrimaryButton from '@/Components/PrimaryButton'
import FlashMessage from '@/Components/FlashMessage'
import { Link } from '@inertiajs/react'

export default function Index({ auth, flashMessage }) {
  return (
    <Authenticated auth={auth}>
        <Link href={route('admin.dashboard.movie.create')}>
            <PrimaryButton type='button' className='w-40 mb-8'>
                Insert new movie
            </PrimaryButton>
        </Link>
        {flashMessage?.message && <FlashMessage message={flashMessage.message}/>}

        {/* <FlashMessage message='test'/>         */}
    </Authenticated>
  )
}
