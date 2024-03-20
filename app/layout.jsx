import '@styles/globals.css';
import Nav from '@components/Nav';
import provider from '@components/provider';

export const metadata = {
    title: 'Aluga não Web',
    description: 'descubra apartamentos para não se alugar'
}

const rootLayout = ({children}) => {
  return (
    <html lang="pt-br">
        <body>
            <div className='main'>
                <div className='gradient'/>
            </div>

            <main className='app'>
                <Nav/>
                {children}
            </main>
        </body>
    </html>
  )
}

export default rootLayout;