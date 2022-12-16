import { Category, CoverArt, Layouts } from "components"
import { AntdConfigProvider } from "config"
import { playlistCategories } from "utils"
import "./App.css"

function App() {
  return (
    <AntdConfigProvider>
      <Layouts>
        <CoverArt />

        {playlistCategories.map((pc, idx) => (
          <Category {...pc} key={`${idx}-${pc.title}`} />
        ))}
      </Layouts>
    </AntdConfigProvider>
  )
}

export default App
