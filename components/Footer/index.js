import DevPlenoLogo from './DevPlenoLogo'

const Footer = () => {
  return (
    <footer className='mt-6 text-center'>
      <div>
        <a href='https://devpleno.com' target='_blank'>
          <DevPlenoLogo className='inline-block mx-2' />
        </a>
      </div>
      <p className='font-bold'>Agenda Lá</p>
      <p>Projeto construído no Fullstack Master</p>
    </footer>
  )
}

export default Footer
