import { useEffect } from 'react'
import { useNavigate } from 'react-router'

export default function Page404() {
    const navigate =useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate("/",{replace:true})
        }, 4000);
    }, [])
    
  return (
    <div className=' bg-primary-background text-center leading-3 pt-7'>
        <h1 className=' '>صفحه مدنظر پیدا نشد</h1>
        <i className=' '>تا چند لحظه دیگر به صفحه اول هدایت میشوید</i>
    </div>
  )
}
