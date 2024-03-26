import { Routes, Route } from "react-router-dom";
import Rule from './components/rule/rule';
import Home from './pages/home/home';
import Regle from "./pages/regle/regle";
import Strat from "./pages/strat/strat";
import Mouv from "./pages/mouv/mouv";
import Tir from "./pages/tir/tir";
import Combat from "./pages/combat/combat";
import './index.css'

function MyRoute() {
    return (
        <div className="Route">
            <Routes>
                <Route path='/tow-react' element={<Home />} />
                <Route path='/strat' element={<Strat />} />
                <Route path='/mouv' element={<Mouv />} />
                <Route path='/tir' element={<Tir />} />
                <Route path='/combat' element={<Combat />} />
                <Route path='/regle-he' element={<Rule />} />
                <Route path='/regle' element={<Regle />}></Route>

            </Routes>
        </div>
    )
}

export default MyRoute