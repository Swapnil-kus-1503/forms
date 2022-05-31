import React from "react";

const Form = () => {
  const [form, setForm] = React.useState({
    username: "",
    email: "",
    password: "",
    age: "",
    isIndian: false,
  });

  const handleOnChange = (e) => {
    let { checked, type, name, value, files } = e.target;
    console.log(type, name, value, checked);

    if (type === "checkbox") {
      setForm({
        ...form,
        [name]: checked,
      });
    } else if (type === "files") {
      setForm({
        ...form,
        [name]: files,
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  //   React.useEffect(() => {
  //     console.log(form);
  //   }, [form]);


  const handleOnSubmit=(e)=>{
    e.preventDefault();
    console.log(form);
  }

  return (
    <div>
      Form
      <form onSubmit={handleOnSubmit}>
        <div>
          <label>Name : </label>
          <input
            type="text"
            name="username"
            onChange={handleOnChange}
            value={form.username}
            placeholder="Enter Name..."
          />
        </div>
        <div>
          <label>E-mail : </label>
          <input
            type="email"
            name="email"
            onChange={handleOnChange}
            value={form.email}
            placeholder="Enter E-mail..."
          />
        </div>
        <div>
          <label>Password : </label>
          <input
            type="password"
            name="password"
            onChange={handleOnChange}
            value={form.password}
            placeholder="Enter Password..."
          />
        </div>
        <div>
          <label>Age : </label>
          <input
            type="number"
            name="age"
            onChange={handleOnChange}
            value={form.age}
            placeholder="Enter Age..."
          />
        </div>
        <div>
          <input
            type="checkbox"
            name="isIndian"
            onChange={handleOnChange}
            checked={form.isIndian}
          />
          <label>: Indian </label>
        </div>
        <div>
          <div>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={handleOnChange}
            />
            <label>Male </label>
          </div>
          <div>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={handleOnChange}
            />
            <label>Female </label>
          </div>
        </div>
        <div>
          <label>Resume : </label>
          <input
            type="file"
            name="resume"
            onChange={handleOnChange}
            files={form.resume}
          />
        </div>
        <div>
          <label>Gender : </label>
          <select name="selectGender"
          value={form.selectGender}
          onChange={handleOnChange}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
          </select>
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
