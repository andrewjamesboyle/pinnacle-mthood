import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/Header/Header'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <div className="bg-gray-900">
        <Header />
      </div>
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

export default MainLayout
