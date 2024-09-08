import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/layout.component";

const BookCreatePage = lazy(() => import('./pages/book/book-create.page'));
const BookEditPage = lazy(() => import('./pages/book/book-edit.page'));
const BookListPage = lazy(() => import('./pages/book/book-list.page'));

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/book" replace />} />
            <Route path="/book">
              <Route index element={<BookListPage />} />
              <Route path="create" element={<BookCreatePage />} />
              <Route path=":id/edit" element={<BookEditPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
