import React from 'react';
import { Login } from '../components/Login';
import { MoviesGrid } from '../components/MoviesGrid';
import { SeriesGrid } from '../components/SeriesGrid';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { PublicRoute } from './PublicRoute';
import { PageNotFound } from '../components/PageNotFound';
import { Layout } from './Layout'


export const AppRoutes = () => {
	return (
   <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute url={"/movies"}>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/movies"
          element={
            <ProtectedRoute url={"/login"}>
              <Layout>
                <MoviesGrid />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/series"
          element={
            <ProtectedRoute url={"/login"}>
				<Layout>
					<SeriesGrid />
				</Layout>
            </ProtectedRoute>
          }
        />
		
		<Route 
				path="/login"
				element={<Login />}
		/>	
		

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
	
}