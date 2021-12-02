import React from "react";

export default function Overview() {
  return (
    <>
      <div className="overview-boxes">
        <div class="box">
          <div class="left-side">
            <div class="box_topic">patients </div>
            <div class="number">300 </div>
            <div class="indicator">
              <i class="bx bx-user-plus"></i>
              <span class="text"> decisiontree heart failure</span>
            </div>
          </div>
          <i class="bx bxs-news news"></i>
        </div>
        <div class="box">
          <div class="left-side">
            <div class="box_topic">lable</div>
            <div class="number">12 </div>
            <div class="indicator">
              <i class="bx bxs-label"></i>
              <span class="text"> decisiontree heart failure</span>
            </div>
          </div>
          <i class="bx bxs-news news"></i>
        </div>
        <div class="box">
          <div class="left-side">
            <div class="box_topic">train </div>
            <div class="number">60%</div>
            <div class="indicator">
              <i class="bx bxs-book-open"></i>
              <span class="text"> decisiontree heart failure</span>
            </div>
          </div>
          <i class="bx bxs-news news"></i>
        </div>
        <div class="box">
          <div class="left-side">
            <div class="box_topic">test</div>
            <div class="number">40%</div>
            <div class="indicator">
              <i class="bx bx-test-tube"></i>
              <span class="text"> decisiontree heart failure</span>
            </div>
          </div>
          <i class="bx bxs-news news"></i>
        </div>
      </div>
      <table className="table table-hover table-bordered  mt-3">
        <thead>
          <tr>
            <th>lable</th>
            <th>detail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>age</th>
            <td>tuổi bệnh nhân(years)</td>
          </tr>
          <tr>
            <th>anamenia</th>
            <td>trạng thiếu máu ,giảm hồng cầu hoặc hemoglobin(boolean)</td>
          </tr>
          <tr>
            <th>high blood pressure</th>
            <td>nếu bệnh nhân bị tăng huyết áp (boolean)</td>
          </tr>
          <tr>
            <th>creatinine phosphokinase (CPK)</th>
            <td>mức độ của enzym CPK trong máu (mcg / L)</td>
          </tr>
          <tr>
            <th>diabetes</th>
            <td>bệnh nhân bị tiểu đường (boolean)</td>
          </tr>
          <tr>
            <th>ejection fraction</th>
            <td>phần trăm máu rời khỏi tim mỗi lần co bóp (%)</td>
          </tr>
          <tr>
            <th>platelets</th>
            <td>tiểu cầu trong máu (kiloplatelets / mL)</td>
          </tr>
          <tr>
            <th>sex</th>
            <td>giới tính</td>
          </tr>
          <tr>
            <th>serum creatinine</th>
            <td>mức độ creatinin huyết thanh trong máu (mg / dL)</td>
          </tr>
          <tr>
            <th>serum sodium</th>
            <td>mức natri huyết thanh trong máu (mEq / L)</td>
          </tr>
          <tr>
            <th>smoking</th>
            <td>bệnh nhân có hút thuốc hay không (boolean)</td>
          </tr>
          <tr>
            <th>time</th>
            <td>thời gian theo dõi (ngày)</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
