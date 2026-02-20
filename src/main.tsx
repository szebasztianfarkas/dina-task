import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import FormStep1 from './pages/form-step-1'
import FormStep2 from './pages/form-step-2'
import FormProvider from './hooks/FormProvider'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
        <FormProvider>
          <Routes>
            <Route path="/step-1" element={<FormStep1 />} />
            <Route path="/step-2" element={<FormStep2 />} />
          </Routes>
        </FormProvider>
      </BrowserRouter>
  </StrictMode>,
)
