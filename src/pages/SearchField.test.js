import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@zarconontol/enzyme-adapter-react-18";
import SearchField from "./SearchField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

Enzyme.configure({ adapter: new Adapter() });

describe("SearchField Enzyme mount()", () => {
  let wrapper;

  beforeEach(() => {
      wrapper = shallow(<SearchField/>);
  });
  test("renders without crashing", () => {
    const wrapper = shallow(<SearchField />);
    expect(wrapper.find(Typography).at(0).text()).toBe("shelton");
  });
  test("renders the btn of test Increment", () => {
    expect(wrapper.find(Button).at(0).text()).toBe("Increment");
  });
  test("renders the btn of test decrement", () => {
    expect(wrapper.find(Button).at(1).text()).toBe("Decrement");
  });

});
