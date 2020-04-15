/* eslint-disable no-undef */
const { loadCalendarMonths } = require("../index.js");
//cypress command
// cypress run --record --key 74b2ce67-54fe-41b4-a59d-5047be452b84

test("loads the calendar months and creates div element", () => {


  const mockInvokeOfLoadCalendarMonths = loadCalendarMonths();
  const dropdownItemTag = document.getElementsByClassName("dropdown-item");
  const monthsTag = document.getElementById("months");


  expect(monthsTag).toBeInTheDocument();
  expect(dropdownItemTag).toBeInTheDocument();
  expect(mockInvokeOfLoadCalendarMonths).toHaveBeenCalledTimes(1);
  console.log(dropdownItemTag.debug());


  fireEvent.click(dropdownItemTag.getElementsByClassName("calendar-btn month-btn"));
  expect(dropdownItemTag).toHaveBeenCalledTimes(1);
});
