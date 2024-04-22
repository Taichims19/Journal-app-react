import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { LoginPage } from "../../../src/auth/pages/LoginPage";
import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../../../src/store/auth";
import { MemoryRouter } from "react-router-dom";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer
  },

})

describe("Pruebas en <Login Page/>", () => {

  test("debe de mostrar el componente correctamente", () => {

    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    )

  });
});

