import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsInstagram, BsTwitter, BsGithub } from 'react-icons/bs';
import { AiFillLinkedin } from "react-icons/ai";
export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500 bg-[#1F2937] mb-[-2rem]'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link
              to='/'
              className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
            >
              <span className='px-2 py-1 rounded-lg text-white architects-daughter text-4xl'>
                QuillQuest
              </span>
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='About' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='/about'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  QuillQuest Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Follow us' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://github.com/karthiknadar1204'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github
                </Footer.Link>
                <Footer.Link href='#'>Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal' />
              <Footer.LinkGroup col>
                <Footer.Link href='#'>Privacy Policy</Footer.Link>
                <Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by="Karthik's blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href='https://www.linkedin.com/in/karthik-nadar-b2155a25b/' icon={AiFillLinkedin}/>
            <Footer.Icon href='#' icon={BsInstagram}/>
            <Footer.Icon href='https://twitter.com/uchiha_katsuki_' icon={BsTwitter}/>
            <Footer.Icon href='https://github.com/karthiknadar1204' icon={BsGithub}/>
          </div>
        </div>
      </div>
    </Footer>
  );
}