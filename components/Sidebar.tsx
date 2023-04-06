import React from 'react'
import {
    BellIcon,
    HashtagIcon,
    BookmarkIcon,
    ListBulletIcon,
    EllipsisHorizontalIcon,
    EnvelopeIcon,
    UserIcon,
    HomeIcon,
} from "@heroicons/react/24/outline";
import SidebarRow from './SidebarRow';
import { signIn, signOut, useSession } from 'next-auth/react'
import DarkSwitch from './DarkSwitch';

function Sidebar() {

    const { data: session } = useSession()

    return (
        <div className="col-span-2 flex flex-col justify-between">
            <div className='flex flex-col item-center px-4 md:items-start cursor-pointer space-y-1'>
                <img
                    className="m-3 h-10 w-10"
                    src="https://i0.wp.com/edinburghuniform.org/wp-content/uploads/2019/11/twitter-logo-png-twitter-logo-vector-png-clipart-library-518.png?fit=518%2C518&ssl=1"
                    alt=""
                />

                <SidebarRow Icon={HomeIcon} title="Home" />
                <SidebarRow Icon={HashtagIcon} title="Explore" />
                <SidebarRow Icon={BellIcon} title="Notifications" />
                <SidebarRow Icon={EnvelopeIcon} title="Messages" />
                <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
                <SidebarRow Icon={ListBulletIcon} title="Lists" />
                <SidebarRow onClick={session ? signOut : signIn} Icon={UserIcon} title={session ? 'Sign Out' : 'Sign In'} />
                <SidebarRow Icon={EllipsisHorizontalIcon} title="More" />
                <DarkSwitch />
            </div>
            {session ? (
                <div className='flex max-w-fit cursor-pointer items-center space-x-3 rounded-full px-4 py-3 transition-all duration-200 hover:dark:bg-[#202326] mb-4'>
                    <img className="h-10 w-10 rounded-full object-cover" src={session?.user?.image} alt="" />
                    <div className='flex flex-col'>
                        <p className="hidden mr-1 font-bold sm:inline">{session?.user?.name}</p>
                        <p className="hidden text-sm text-gray-500 sm:inline">
                            @{session?.user?.name?.replace(/\s+/g, '').toLowerCase()}
                        </p>
                    </div>
                    {/* <a
                    className="text-2xl rounded-full text-[#70767B]">
                    <EllipsisHorizontalIcon className='h-5' />
                </a> */}
                </div>) : (
                <div>
                    <p></p>
                </div>
            )}
        </div>

    )
}

export default Sidebar