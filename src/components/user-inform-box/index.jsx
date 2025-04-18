export default function UserInformBox({text, title}) {
    return (
        <div className='h-16 rounded-[12px] mt-[17px] flex items-center justify-center bg-white cursor-pointer'>
            <div className='flex items-center justify-between gap-x-7'>

                <div className='flex items-center justify-center w-10 h-10 rounded-full bg-[#e2d5ff]'>
                   <span>
                       <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                            <path
                                d="M8.34677 1.94C6.1401 1.94 4.34677 3.73334 4.34677 5.94V7.86667C4.34677 8.27334 4.17343 8.89334 3.96677 9.24L3.2001 10.5133C2.72677 11.3 3.05343 12.1733 3.9201 12.4667C6.79343 13.4267 9.89343 13.4267 12.7668 12.4667C13.5734 12.2 13.9268 11.2467 13.4868 10.5133L12.7201 9.24C12.5201 8.89334 12.3468 8.27334 12.3468 7.86667V5.94C12.3468 3.74 10.5468 1.94 8.34677 1.94Z"
                                stroke="#702DFF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
                            <path
                                d="M9.58007 2.13333C9.3734 2.07333 9.16007 2.02667 8.94007 2C8.30007 1.92 7.68674 1.96667 7.1134 2.13333C7.30674 1.64 7.78674 1.29333 8.34674 1.29333C8.90674 1.29333 9.38674 1.64 9.58007 2.13333Z"
                                stroke="#702DFF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path
                                d="M10.3467 12.7067C10.3467 13.8067 9.44668 14.7067 8.34668 14.7067C7.80001 14.7067 7.29335 14.48 6.93335 14.12C6.57335 13.76 6.34668 13.2533 6.34668 12.7067"
                                stroke="#702DFF" stroke-width="1.5" stroke-miterlimit="10"/>
                       </svg>
                   </span>
                </div>

                <div className='flex flex-col gap-y-1'>
                    <span className='text-xs text-[#5F5F5F]'>{text}</span>
                    <span className='font-semibold text-xs'>{title}</span>
                </div>

                <span>
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                        <path
                            d="M11.6667 4.66667C11.6667 3.75 10.9167 3 10.0001 3C9.08341 3 8.33341 3.75 8.33341 4.66667C8.33341 5.58333 9.08341 6.33333 10.0001 6.33333C10.9167 6.33333 11.6667 5.58333 11.6667 4.66667Z"
                            stroke="#202020"
                            strokeWidth="1.5"
                        />
                        <path
                            d="M11.6667 16.3334C11.6667 15.4167 10.9167 14.6667 10.0001 14.6667C9.08341 14.6667 8.33341 15.4167 8.33341 16.3334C8.33341 17.25 9.08341 18 10.0001 18C10.9167 18 11.6667 17.25 11.6667 16.3334Z"
                            stroke="#202020"
                            strokeWidth="1.5"
                        />
                        <path
                            d="M11.6667 10.5C11.6667 9.58331 10.9167 8.83331 10.0001 8.83331C9.08341 8.83331 8.33341 9.58331 8.33341 10.5C8.33341 11.4166 9.08341 12.1666 10.0001 12.1666C10.9167 12.1666 11.6667 11.4166 11.6667 10.5Z"
                            stroke="#202020"
                            strokeWidth="1.5"
                        />
                    </svg>
                </span>
            </div>
        </div>
    )
}