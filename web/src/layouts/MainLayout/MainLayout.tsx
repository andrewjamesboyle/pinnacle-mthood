import Header from 'src/components/Header/Header'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <div className="bg-gray-300">
        <Header />
      </div>
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

export default MainLayout
