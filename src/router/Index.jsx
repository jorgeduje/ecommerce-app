import { RoutesItems } from './RoutesItems'
import { Routes, Route } from 'react-router-dom'

const Index = () => {
    return (
        <Routes>
            {RoutesItems.map(({ id, path, Element }) => (
                <Route path={path} key={id} element={<Element />} />
            ))}
        </Routes>
    )
}

export default Index
