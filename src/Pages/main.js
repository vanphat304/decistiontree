import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function Main() {
  const img = process.env.PUBLIC_URL + "/decisiontree.png";

  const [heartValue, setHeartValue] = useState({
    age: "",
    anaemia: "",
    creatinine_phosphp: "",
    diabetes: "",
    ejection_fraction: "",
    high_blood: "",
    platelets: "",
    sr_creatinine: "",
    sr_sodium: "",
    sex: "",
    smoking: "",
    time: "",
  });

  const [acuracy, setAcuracy] = useState(0);
  const [preditResult, setPreditResult] = useState(null);

  const handleChange = (e) => {
    let { value, name } = e.target;
    setHeartValue({
      ...heartValue,
      [name]: value,
    });
  };

  const calcAcuracy = async () => {
    try {
      const data = await axios.get("http://localhost:8000/accuracy");
      console.log(data.data);
      setAcuracy(data.data);
    } catch (error) {
      alert(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await (
        await axios.post("http://localhost:8000/predict", heartValue)
      ).data;
      setPreditResult(result);
    } catch (error) {
      alert(error, "invalid value");
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="news-post">
      <div className="news-post-btn">
        <button
          className="post-btn"
          onClick={() => {
            calcAcuracy();
          }}
        >
          calculate acruracy{" "}
        </button>

        {acuracy === 0 ? (
          ""
        ) : (
          <button className="post-btn">
            Độ chính sách của mô hình là : {acuracy * 100}%
          </button>
        )}
      </div>
      <div className="new-post-manage post">
        <h1>Heart Failure</h1>
        <form onSubmit={handleSubmit}>
          <div className="input_wrap">
            <div className="input_form">
              <label> age </label>
              <br />
              <input
                type="number"
                name="age"
                className="text-input"
                onChange={handleChange}
              />
            </div>
            <div className="input_form">
              <label> anaemia ? </label>
              <br />
              <select name="anaemia" id onChange={handleChange}>
                <option value></option>
                <option value={1}>yes</option>
                <option value={0}>no</option>
              </select>
            </div>

            <div className="input_form">
              <label> creatinine_phosphokinase </label>
              <br />
              <input
                type="number"
                name="creatinine_phosphp"
                className="text-input"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="input_wrap">
            <div className="input_form">
              <label> diabetes ? </label>
              <br />
              <select name="diabetes" id onChange={handleChange}>
                <option value></option>
                <option value={1}>yes</option>
                <option value={0}>no</option>
              </select>
            </div>

            <div className="input_form">
              <label> ejection_fraction </label>
              <br />
              <input
                type="number"
                name="ejection_fraction"
                className="text-input"
                onChange={handleChange}
              />
            </div>

            <div className="input_form">
              <label> high_blood_pressure ? </label>
              <br />
              <select name="high_blood" id onChange={handleChange}>
                <option value></option>
                <option value={1}>yes</option>
                <option value={0}>no</option>
              </select>
            </div>
          </div>

          <div className="input_wrap">
            <div className="input_form">
              <label> platelets </label>
              <br />
              <input
                type="number"
                name="platelets"
                className="text-input"
                onChange={handleChange}
              />
            </div>

            <div className="input_form">
              <label> serum_creatinine </label>
              <br />
              <input
                type="number"
                name="sr_creatinine"
                className="text-input"
                onChange={handleChange}
              />
            </div>

            <div className="input_form">
              <label> serum_sodium </label>
              <br />
              <input
                type="number"
                name="sr_sodium"
                className="text-input"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="input_wrap">
            <div className="input_form">
              <label> gender </label>
              <br />
              <select name="sex" id onChange={handleChange}>
                <option value></option>
                <option value={1}>male</option>
                <option value={0}>fermale</option>
              </select>
            </div>

            <div className="input_form">
              <label> smoking ? </label>
              <br />
              <select name="smoking" id onChange={handleChange}>
                <option value></option>
                <option value={1}>yes</option>
                <option value={0}>no</option>
              </select>
            </div>

            <div className="input_form">
              <label> time </label>
              <br />
              <input
                type="number"
                name="time"
                className="text-input"
                onChange={handleChange}
              />
            </div>
          </div>

          <button style={{ margin: "25px auto" }} className="post-btn">
            Death Event
          </button>
        </form>
        {preditResult == null ? (
          ""
        ) : (
          <button className="post-btn">
            {preditResult == 0 ? "Alive" : "Death"}
          </button>
        )}
      </div>
    </div>
  );
}
