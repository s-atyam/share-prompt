import '@styles/globals.css'

export const metadata = {
  title:'Discover Muse',
  description:'Discover & share AI prompts'
}

import Nav from '@components/Nav'
import Provider from '@components/Provider'

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
      <body>
        <Provider>
          <div className='main'>
            <div className='gradient'/>
          </div>
          <main className='app'>
            <Nav/>
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout
