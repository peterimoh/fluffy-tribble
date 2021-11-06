import React from 'react'
import './control.css'
// import '../../filter.css'

const Control = () => {
    return (
       <section class="cd-main-content sec-up wow animated fadeInUp fast">
    <div class="cd-filter">
      <form>
        <div class="container">
          <div class="sec-main pb-5 sec-bg1">
            <div class="plans badge feat bg-pink">filter</div>
            <div class="row">
              <a href="#0" class="cd-close"><i class="fas fa-long-arrow-alt-left"></i></a>
              <div class="col-md-6">
                <div class="cd-filter-block">
                  <h4>Choose Server</h4>
                  <ul class="radio-group radios-filter cd-filter-content list">
                    <li>
                      <button value="all" type="radio" name="radioButton" id="radio1" checked>
                      All
                        </button>
                      {/* <label class="radio-label" for="radio1"> </label> */}
                    </li>
                    <li>
                      <button value=".linux" type="radio" name="radioButton" id="radio2">
                        Linux
                        </button>
                      {/* <label class="radio-label" for="radio2"></label> */}
                    </li>
                    <li>
                      <button value=".windows" type="radio" name="radioButton" id="radio3">
                        Windows
                        </button>
                      {/* <label class="radio-label" for="radio3"></label> */}
                    </li>
                    <li>
                      <button value=".managed" type="radio" name="radioButton" id="radio4">
                        Managed
                        </button>
                      {/* <label class="radio-label" for="radio4"></label> */}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-6">
                <div class="cd-filter-block">
                  <h4>Location</h4>
                  <div class="cd-filter-content cd-select">
                    <select class="select-filter">
                      <option value="all">Select Datacenter</option>
                      <option value=".data1">New York</option>
                      <option value=".data2">Montreal</option>
                      <option value=".data3">Portugal</option>
                      <option value=".data4">London</option>
                      <option value=".data5">Moscow</option>
                      <option value=".data6">Hong Kong</option>
                      <option value=".data7">Singapure</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="cd-filter-block checkbox-group">
                  <h4>CPU Cores</h4>
                  <ul class="cd-filter-content cd-filters list">
                    <li>
                      <button class="filter" value=".cores2" type="checkbox" id="checkbox1">
                        2
                        </button>
                      {/* <label class="checkbox-label" for="checkbox1">2</label> */}
                    </li>
                    <li>
                      <button class="filter" value=".cores4" type="checkbox" id="checkbox2">
                        4
                        </button>
                      {/* <label class="checkbox-label" for="checkbox2">4</label> */}
                    </li>
                    <li>
                      <button class="filter" value=".cores6" type="checkbox" id="checkbox3">
                        6
                        </button>
                      {/* <label class="checkbox-label" for="checkbox3">6</label> */}
                    </li>
                    <li>
                      <button class="filter" value=".cores8" type="checkbox" id="checkbox4">
                        8
                        </button>
                      {/* <label class="checkbox-label" for="checkbox4">8</label> */}
                    </li>
                    <li>
                      <button class="filter" value=".cores12" type="checkbox" id="checkbox5">
                        12
                        </button>
                      {/* <label class="checkbox-label" for="checkbox5">12</label> */}
                    </li>
                    <li>
                      <button class="filter" value=".cores16" type="checkbox" id="checkbox6">
                        16
                        </button>
                      {/* <label class="checkbox-label" for="checkbox6">16</label> */}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-6">
                <div class="cd-filter-block">
                  <h4>RAM</h4>
                  <div class="cd-filter-content cd-filters list">
                    <datalist>
                    <option value="0"> 16</option>
                    <option value="1"> 32</option>
                    <option value="2"> 64</option>
                    <option value="3"> 96</option>
                    <option value="4"> 128</option>
                    <option value="5"> 256</option>
                    </datalist>
                    <div class="range-slider">
                      <input name="minSize" class="range-slider-input tooltip-parent" type="range" min="0" max="5" value="0" data-list="sizeLegend"/>
                    </div>
                    <div class="range-slider">
                      <input name="maxSize" class="range-slider-input tooltip-parent" type="range" min="0" max="5" value="5" data-list="sizeLegend"/>
                    </div>
                  </div>
                  {/* <div class="search-disabled">
                    <input type="text" class="input" data-ref="input-search" placeholder="Enter a domain extension (.com)"/>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
    )
}

export default Control
