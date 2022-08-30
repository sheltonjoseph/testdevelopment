import App from "./App";
import Enzyme,  { shallow ,mount} from "enzyme";
import Adapter from "@zarconontol/enzyme-adapter-react-18";


Enzyme.configure({ adapter: new Adapter() });

// jest describe allow user to store and run multiple realted test inside one test block
// using enzyme u can grab the elememt from tag name , text name , classname etc
// # is used to find the element using the id

describe("Counter Testing", () => {
  // defining the wrapper globally
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  // defining wrapper without beforeEach
  test("renders the Title of counter", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find("h1").text()).toContain("This is counter app");
  });
  test("renders the btn of test increment", () => {
    expect(wrapper.find("#increment-btn").text()).toBe("Increment");
  });
  test("render the initial value of state in a div", () => {
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });
  // for click events kindly refer enzymes
  test("render the click event of increment button and increment counter value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
  });
  test("render the click event of decrement button and decrement counter value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });
});


