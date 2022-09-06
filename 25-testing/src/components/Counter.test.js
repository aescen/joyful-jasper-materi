/* eslint-disable testing-library/prefer-screen-queries */

import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

// nama test case, jika fail dia yang muncul
test("renders text count", () => {
  // component apa pada element yang dites
  render(<Counter />);
  // text yang mau dites
  const textCount = screen.getByText(/Count:/i);
  // ekpektasi apa yang mau di cocokan
  expect(textCount).toBeInTheDocument();
});

// mengecheck initial count
describe("Counter", () => {
  it("checking value initial count", () => {
    const { getByTestId } = render(<Counter initialCount={0} />);

    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(0);
  });

  it("count bertambah 1 sesuai button increment", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    const incrementbtn = getByRole("button", { name: "Increment" });

    // simulasi nilai awal
    const countValue1 = Number(getByTestId("count").textContent);
    expect(countValue1).toEqual(0);

    // mensimulasikan klik
    fireEvent.click(incrementbtn);

    // simulasi setelah klik nilai akhir
    const countValue2 = Number(getByTestId("count").textContent);
    expect(countValue2).toEqual(1);
  });

  it("count berkurang 1 sesuai button decrement", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);

    const decrementbtn = getByRole("button", { name: "Decrement" });

    // simulasi nilai awal
    const countValue1 = Number(getByTestId("count").textContent);
    expect(countValue1).toEqual(0);

    // mensimulasikan klik
    fireEvent.click(decrementbtn);

    // simulasi setelah klik nilai akhir
    const countValue2 = Number(getByTestId("count").textContent);
    expect(countValue2).toEqual(-1);
  });
});
