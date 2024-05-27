import fb from '/facebook (1) 1.png'
import insta from '/instagram.png'
import git from '/githuub.png'

export const Footer = () => {
  return (
    <div>
      <footer className="w-full bg-black">
        <div className="flex justify-between p-20">
          <div className="w-[550px] h-[174px]">
            <p className="uppercase text-white text-4xl font-bold">
              Are You ready to take it to next <span className="text-red-500">level</span>?
            </p>
          </div>
          <div className="flex w-[265px] h-[63px] gap-[30px]">
            <a href="#"><img src={insta} className='w-[50px] h-[50px]' alt="insta" /></a>
            <a href="#"><img src={git} className='w-[50px] h-[50px]' alt="git" /></a>
            <a href="#"><img src={fb} className='w-[50px] h-[50px]' alt="fb" /></a>
          </div>
        </div>
        <div className='flex justify-end gap-20 text-white mx-20 pb-6 font-light'>
          <p className=''>Terms and Conditons</p>
          <p>Privacy Policy</p>
        </div>
      </footer>
    </div>
  );
};
