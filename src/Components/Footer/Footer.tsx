
const Footer = () => {
  const handleScrollToTop=()=>{
    window.scrollTo(
      {
        top:0,
        behavior:'smooth'
      }
    )
  }
  return (
    <>
        <div className="footer-bottom vh-9 d-flex  justify-content-center align-items-center">
            <div className="width-92 d-flex justify-content-between">
                <p className="fixed red-text"><i onClick={handleScrollToTop} className="fa-solid red-text fa-circle-up fa-xl"></i></p>
                <p className="color-gray fs-12 ls-1"><i className="fa-regular fa-copyright color-gray"></i>&nbsp;&nbsp;COPY RIGHT 2023 - PICKAMOVIEORME.COM</p>  
                <p className="color-gray fs-12 ls-1">CONTACT | PRIVACY POLICY</p> 
            </div>      
        </div>      
    </>
  )
}

export default Footer
