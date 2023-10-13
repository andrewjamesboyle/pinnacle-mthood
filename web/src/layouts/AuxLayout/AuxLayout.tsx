import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/Header/Header'

type AuxLayoutProps = {
  children?: React.ReactNode
}

const AuxLayout = ({ children }: AuxLayoutProps) => {
  return (
    <>
      <div className="bg-gray-900">
        <Header />
      </div>
      <div>
        <main>{children}</main>
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default AuxLayout
