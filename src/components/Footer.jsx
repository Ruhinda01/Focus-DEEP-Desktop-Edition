
const Footer = () => {
  return (
    <footer className="bg-[#430064] mt-10 sm:mt-20 md:mt-28 lg:mt-32 w-full py-8 px-4 md:px-8 lg:px-12 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Name and Year Section */}
        <div className="flex flex-col space-y-2">
          <p className="font-bebas-neue font-bold text-3xl">FOCUS</p>
          <p className="font-outfit text-xs">FOCUS © {new Date().getFullYear()}</p>
          <p className="font-outfit text-xs">Contact us: <a href="mailto:rickyruhinda@gmail.com" className="hover:underline">rickyruhinda@gmail.com</a></p>
        </div>
        {/* About Section */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-bebas-neue font-bold text-xl">About</h3>
          <p className="font-outfit text-xs">This application was birthed by need for deep focused work and rest. A way for me to be accountable to myself. It is meant to be a diet version of the main <a href="https://focus-opal-delta.vercel.app/home" className="hover:underline">FOCUS</a> application. 25 minute working is no more. With FOCUS, you can focus on deep work rather than the pomodoro technique. Try this out. Cheers!</p>
        </div>
        {/* Contact Section */}
        <div className="flex flex-col space-y-2">
          <p className="font-bebas-neue font-bold text-xl">Get in touch</p>
          <div className="flex space-x-4 font-outfit text-xs">
            <a href="https://ruhinda.vercel.app/" className="hover:underline">Ruhinda</a>
            <a href="https://twitter.com/ricky_ruhinda" className="hover:underline">Twitter</a>
            <a href="https://www.linkedin.com/in/ruhinda-roderick-izooba/" className="hover:underline">LinkedIn</a>
            <a href="https://github.com/Ruhinda01" className="hover:underline">GitHub</a>
          </div>
        </div>
        {/* Source Code Section */}
        <div className="max-w-6xl mx-auto mt-8 text-center md:col-start-2 md:col-span-1 font-outfit text-sm">
          <p>Check out the source code on <a href="https://github.com/Ruhinda01/Focus-DEEP-Desktop-Edition" className="hover:underline font-bold">GitHub</a></p>
          <p>App Version 1.0.0</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer