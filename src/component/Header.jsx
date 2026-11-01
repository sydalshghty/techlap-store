import TopHeader from "./Top-Header";
import MainHeader from "./Main-Header";
import CategoryNavbar from "./Category-Navbar";
function Header() {
    return (
        <div className="header sticky top-0 w-full h-full z-10">
            <TopHeader />
            <MainHeader />
            <CategoryNavbar />
        </div>
    )
}
export default Header;