import React from 'react';
import { Login } from '../auth/components/Login';
import { MoviesGrid } from '../features/movies/components/MoviesGrid';
import { SeriesGrid } from '../features/series/components/SeriesGrid';
import { HashRouter , Routes , Route } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { PublicRoute } from './PublicRoute';
import { PageNotFound } from '../common/components/PageNotFound';
import { Layout } from '../common/components/Layout'


export const AppRoutes = () => {
	return (
   <HashRouter>
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
    </HashRouter>
  );
	
}