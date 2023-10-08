1===========================;
create app with redux toolkit;
npx create-react-app my-app --template redux

2============================;
install tailwind css;
goto tailwind site and check from there;

3=============================;
make a product-list folder which is a copy of counter in features folder;
insert default keyword;

4=============================;
copy an ecommerce productlist and paste it in productList.js in product-list/features folder;
install it and paste in plugins;
plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],


5==============================;
copy and paste the category filters code in productList.js in product-list/features folder;
install it and paste in plugins;
plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],



6===============================;
we have to install two more depedencies;
npm install @headlessui/react @heroicons/react

7================================;
delete subcategories;

8========================;
search stacked layouts in tailwind
then,
make new folder naming navbar
then,
copy paste navbar from tailwind
then,
put chilldren in props of navbar
const Navbar = ({ children }) => {
   <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {/* Your content */}
            {children}
          </div>
    </main>

then,
make a pages folder and Home.js init;
import Navbar from "../features/navbar/Navbar";
import ProductList from "../features/product-list/ProductList";
const Home = () => {
  return (
    <div>
        <Navbar>
            <ProductList></ProductList>
        </Navbar>
    </div>
  )
}

then,
import Home in app.js;


9==========================================;
make LoginPage.js and SignupPage.js in pages folder,
then,
make auth folder in features and Login.js init and copy counterApi.js and counterSlice.js and paste in auth folder
then,
make components folder in auth folder and move Login.js there and also make signup.js there;

10==========================================;
now we are setting router for our app,
npm install reac-router-dom;
copy router functionalty from react router dom docs
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );






