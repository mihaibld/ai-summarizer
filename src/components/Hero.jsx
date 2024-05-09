import { logo } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sparknotes_logo' className='w-10 object-contain' />

        <button
          type='button'
          onClick={() => window.open('https://github.com/mihaibld')}
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Simplify Your Reading with <br className='max-md:hidden'/>
        <span className='blue_gradient'>OpenAI GPT-4</span>
      </h1>

      <h2 className='desc'>
      Capture the essence of any article with SparkNotes
      </h2>
    </header>
  )
}

export default Hero;
