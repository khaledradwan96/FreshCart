/* eslint-disable no-unused-vars */
// AddProductBtn.jsx

export default function AddressTitle() {
  let userName = localStorage.getItem('userName')
  let pageName = window.location.pathname.slice(1, )
  
  return <>
    <div className='flex justify-between mb-10'>
        <div>
            <span className='text-[#00000080]'>Home / </span>
            <span className="capitalize text-black"> {pageName} </span> 
        </div>
        <div>
            <span>Welcome! </span>
            <span className='text-red-500 font-semibold'>{userName}</span>
        </div>
    </div>
  </>
}
