'use client'
import React, { useState, useEffect } from 'react'


export default function Page() {
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
        setHasMounted(true);
    }, []);
    return hasMounted && (
        <>
            <div className='cardBox'>
                <div className="cardBoxTitle cardBoxTitleSmall bg-light">
                    <div className='d-flex align-items-center justify-content-between'>
                        <div><h6 className="fw-semibold mb-0">Add Patient</h6></div>
                    </div>
                </div>

                <div className='cardBoxBody'>
                    <form action="">


                        <div className='row'>
                            <div className='col-md-6 mb-1'>
                                <h4>GP Details</h4>
                                <div className="mb-1">
                                    <label htmlFor="team" className="col-form-label">GP Name</label>
                                    <input type="text" className="form-control" id="team" />
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="team" className="col-form-label">Clinic / Surgery Name</label>
                                    <input type="text" className="form-control" id="team" />

                                </div>
                                <div className="mb-1 ">
                                    <label htmlFor="team" className="col-form-label">Email</label>
                                    <input type="text" className="form-control" id="team" />

                                </div>
                                <div className="mb-1">
                                    <label htmlFor="team" className="col-form-label">Confirm Email</label>
                                    <input type="text" className="form-control" id="team" />

                                </div>
                                <div className="mb-1">
                                    <label htmlFor="team" className="col-form-label">Landline</label>
                                    <input type="text" className="form-control" id="team" />

                                </div>
                                <div className="mb-1">
                                    <label htmlFor="team" className="col-form-label">Fax</label>
                                    <input type="text" className="form-control" id="team" />
                                </div>
                            </div>
                            <div className='col-md-6 mb-1'>
                                <h4>Contact Details</h4>
                                <div className="mb-1">
                                    <label htmlFor="team" className="col-form-label">Address Line 1</label>
                                    <input type="text" className="form-control" id="team" />
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="team" className="col-form-label">Address Line 2</label>
                                    <input type="text" className="form-control" id="team" />
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="team" className="col-form-label">City</label>
                                    <input type="text" className="form-control" id="team" />
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="team" className="col-form-label">Country</label>
                                    <select className='form-control'>
                                        <option value="">Select Country</option>
                                        <option value="Afghanistan">Afghanistan</option>
                                        <option value="Albania">Albania</option>
                                        <option value="Algeria">Algeria</option>
                                        <option value="American Samoa">American Samoa</option>
                                        <option value="Angola">Angola</option>
                                        <option value="Anguilla">Anguilla</option>
                                        <option value="Antartica">Antartica</option>
                                        <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                        <option value="Argentina">Argentina</option>
                                        <option value="Armenia">Armenia</option>
                                        <option value="Aruba">Aruba</option>
                                        <option value="Ashmore and Cartier Island">Ashmore and Cartier Island</option>
                                        <option value="Australia">Australia</option>
                                        <option value="Austria">Austria</option>
                                        <option value="Azerbaijan">Azerbaijan</option>
                                        <option value="Bahamas">Bahamas</option>
                                        <option value="Bahrain">Bahrain</option>
                                        <option value="Bangladesh">Bangladesh</option>
                                        <option value="Barbados">Barbados</option>
                                        <option value="Belarus">Belarus</option>
                                        <option value="Belgium">Belgium</option>
                                        <option value="Belize">Belize</option>
                                        <option value="Benin">Benin</option>
                                        <option value="Bermuda">Bermuda</option>
                                        <option value="Bhutan">Bhutan</option>
                                        <option value="Bolivia">Bolivia</option>
                                        <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                        <option value="Botswana">Botswana</option>
                                        <option value="Brazil">Brazil</option>
                                        <option value="British Virgin Islands">British Virgin Islands</option>
                                        <option value="Brunei">Brunei</option>
                                        <option value="Bulgaria">Bulgaria</option>
                                        <option value="Burkina Faso">Burkina Faso</option>
                                        <option value="Burma">Burma</option>
                                        <option value="Burundi">Burundi</option>
                                        <option value="Cambodia">Cambodia</option>
                                        <option value="Cameroon">Cameroon</option>
                                        <option value="Canada">Canada</option>
                                        <option value="Cape Verde">Cape Verde</option>
                                        <option value="Cayman Islands">Cayman Islands</option>
                                        <option value="Central African Republic">Central African Republic</option>
                                        <option value="Chad">Chad</option>
                                        <option value="Chile">Chile</option>
                                        <option value="China">China</option>
                                        <option value="Christmas Island">Christmas Island</option>
                                        <option value="Clipperton Island">Clipperton Island</option>
                                        <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                        <option value="Colombia">Colombia</option>
                                        <option value="Comoros">Comoros</option>
                                        <option value="Congo, Democratic Republic of the">Congo, Democratic Republic of the</option>
                                        <option value="Congo, Republic of the">Congo, Republic of the</option>
                                        <option value="Cook Islands">Cook Islands</option>
                                        <option value="Costa Rica">Costa Rica</option>
                                        <option value="Cote dIvoire">Cote d Ivoire</option>
                                        <option value="Croatia">Croatia</option>
                                        <option value="Cuba">Cuba</option>
                                        <option value="Cyprus">Cyprus</option>
                                        <option value="Czeck Republic">Czeck Republic</option>
                                        <option value="Denmark">Denmark</option>
                                        <option value="Djibouti">Djibouti</option>
                                        <option value="Dominica">Dominica</option>
                                        <option value="Dominican Republic">Dominican Republic</option>
                                        <option value="Ecuador">Ecuador</option>
                                        <option value="Egypt">Egypt</option>
                                        <option value="El Salvador">El Salvador</option>
                                        <option value="Equatorial Guinea">Equatorial Guinea</option>
                                        <option value="Eritrea">Eritrea</option>
                                        <option value="Estonia">Estonia</option>
                                        <option value="Ethiopia">Ethiopia</option>
                                        <option value="Europa Island">Europa Island</option>
                                        <option value="Falkland Islands (Islas Malvinas)">Falkland Islands (Islas Malvinas)</option>
                                        <option value="Faroe Islands">Faroe Islands</option>
                                        <option value="Fiji">Fiji</option>
                                        <option value="Finland">Finland</option>
                                        <option value="France">France</option>
                                        <option value="French Guiana">French Guiana</option>
                                        <option value="French Polynesia">French Polynesia</option>
                                        <option value="French Southern and Antarctic Lands">French Southern and Antarctic Lands</option>
                                        <option value="Gabon">Gabon</option>
                                        <option value="Gambia, The">Gambia, The</option>
                                        <option value="Gaza Strip">Gaza Strip</option>
                                        <option value="Georgia">Georgia</option>
                                        <option value="Germany">Germany</option>
                                        <option value="Ghana">Ghana</option>
                                        <option value="Gibraltar">Gibraltar</option>
                                        <option value="Glorioso Islands">Glorioso Islands</option>
                                        <option value="Greece">Greece</option>
                                        <option value="Greenland">Greenland</option>
                                        <option value="Grenada">Grenada</option>
                                        <option value="Guadeloupe">Guadeloupe</option>
                                        <option value="Guam">Guam</option>
                                        <option value="Guatemala">Guatemala</option>
                                        <option value="Guernsey">Guernsey</option>
                                        <option value="Guinea">Guinea</option>
                                        <option value="Guinea-Bissau">Guinea-Bissau</option>
                                        <option value="Guyana">Guyana</option>
                                        <option value="Haiti">Haiti</option>
                                        <option value="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option>
                                        <option value="Holy See (Vatican City)">Holy See (Vatican City)</option>
                                        <option value="Honduras">Honduras</option>
                                        <option value="Hong Kong">Hong Kong</option>
                                        <option value="Howland Island">Howland Island</option>
                                        <option value="Hungary">Hungary</option>
                                        <option value="Iceland">Iceland</option>
                                        <option value="India">India</option>
                                        <option value="Indonesia">Indonesia</option>
                                        <option value="Iran">Iran</option>
                                        <option value="Iraq">Iraq</option>
                                        <option value="Ireland">Ireland</option>
                                        <option value="Ireland, Northern">Ireland, Northern</option>
                                        <option value="Israel">Israel</option>
                                        <option value="Italy">Italy</option>
                                        <option value="Jamaica">Jamaica</option>
                                        <option value="Jan Mayen">Jan Mayen</option>
                                        <option value="Japan">Japan</option>
                                        <option value="Jarvis Island">Jarvis Island</option>
                                        <option value="Jersey">Jersey</option>
                                        <option value="Johnston Atoll">Johnston Atoll</option>
                                        <option value="Jordan">Jordan</option>
                                        <option value="Juan de Nova Island">Juan de Nova Island</option>
                                        <option value="Kazakhstan">Kazakhstan</option>
                                        <option value="Kenya">Kenya</option>
                                        <option value="Kiribati">Kiribati</option>
                                        <option value="Korea, North">Korea, North</option>
                                        <option value="Korea, South">Korea, South</option>
                                        <option value="Kuwait">Kuwait</option>
                                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                                        <option value="Laos">Laos</option>
                                        <option value="Latvia">Latvia</option>
                                        <option value="Lebanon">Lebanon</option>
                                        <option value="Lesotho">Lesotho</option>
                                        <option value="Liberia">Liberia</option>
                                        <option value="Libya">Libya</option>
                                        <option value="Liechtenstein">Liechtenstein</option>
                                        <option value="Lithuania">Lithuania</option>
                                        <option value="Luxembourg">Luxembourg</option>
                                        <option value="Macau">Macau</option>
                                        <option value="Macedonia, Former Yugoslav Republic of">Macedonia, Former Yugoslav Republic of</option>
                                        <option value="Madagascar">Madagascar</option>
                                        <option value="Malawi">Malawi</option>
                                        <option value="Malaysia">Malaysia</option>
                                        <option value="Maldives">Maldives</option>
                                        <option value="Mali">Mali</option>
                                        <option value="Malta">Malta</option>
                                        <option value="Man, Isle of">Man, Isle of</option>
                                        <option value="Marshall Islands">Marshall Islands</option>
                                        <option value="Martinique">Martinique</option>
                                        <option value="Mauritania">Mauritania</option>
                                        <option value="Mauritius">Mauritius</option>
                                        <option value="Mayotte">Mayotte</option>
                                        <option value="Mexico">Mexico</option>
                                        <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                                        <option value="Midway Islands">Midway Islands</option>
                                        <option value="Moldova">Moldova</option>
                                        <option value="Monaco">Monaco</option>
                                        <option value="Mongolia">Mongolia</option>
                                        <option value="Montserrat">Montserrat</option>
                                        <option value="Morocco">Morocco</option>
                                        <option value="Mozambique">Mozambique</option>
                                        <option value="Namibia">Namibia</option>
                                        <option value="Nauru">Nauru</option>
                                        <option value="Nepal">Nepal</option>
                                        <option value="Netherlands">Netherlands</option>
                                        <option value="Netherlands Antilles">Netherlands Antilles</option>
                                        <option value="New Caledonia">New Caledonia</option>
                                        <option value="New Zealand">New Zealand</option>
                                        <option value="Nicaragua">Nicaragua</option>
                                        <option value="Niger">Niger</option>
                                        <option value="Nigeria">Nigeria</option>
                                        <option value="Niue">Niue</option>
                                        <option value="Norfolk Island">Norfolk Island</option>
                                        <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                        <option value="Norway">Norway</option>
                                        <option value="Oman">Oman</option>
                                        <option value="Pakistan">Pakistan</option>
                                        <option value="Palau">Palau</option>
                                        <option value="Panama">Panama</option>
                                        <option value="Papua New Guinea">Papua New Guinea</option>
                                        <option value="Paraguay">Paraguay</option>
                                        <option value="Peru">Peru</option>
                                        <option value="Philippines">Philippines</option>
                                        <option value="Pitcaim Islands">Pitcaim Islands</option>
                                        <option value="Poland">Poland</option>
                                        <option value="Portugal">Portugal</option>
                                        <option value="Puerto Rico">Puerto Rico</option>
                                        <option value="Qatar">Qatar</option>
                                        <option value="Reunion">Reunion</option>
                                        <option value="Romainia">Romainia</option>
                                        <option value="Russia">Russia</option>
                                        <option value="Rwanda">Rwanda</option>
                                        <option value="Saint Helena">Saint Helena</option>
                                        <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                        <option value="Saint Lucia">Saint Lucia</option>
                                        <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                        <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                                        <option value="Samoa">Samoa</option>
                                        <option value="San Marino">San Marino</option>
                                        <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                        <option value="Saudi Arabia">Saudi Arabia</option>
                                        <option value="Scotland">Scotland</option>
                                        <option value="Senegal">Senegal</option>
                                        <option value="Seychelles">Seychelles</option>
                                        <option value="Sierra Leone">Sierra Leone</option>
                                        <option value="Singapore">Singapore</option>
                                        <option value="Slovakia">Slovakia</option>
                                        <option value="Slovenia">Slovenia</option>
                                        <option value="Solomon Islands">Solomon Islands</option>
                                        <option value="Somalia">Somalia</option>
                                        <option value="South Africa">South Africa</option>
                                        <option value="South Georgia and South Sandwich Islands">South Georgia and South Sandwich Islands</option>
                                        <option value="Spain">Spain</option>
                                        <option value="Spratly Islands">Spratly Islands</option>
                                        <option value="Sri Lanka">Sri Lanka</option>
                                        <option value="Sudan">Sudan</option>
                                        <option value="Suriname">Suriname</option>
                                        <option value="Svalbard">Svalbard</option>
                                        <option value="Swaziland">Swaziland</option>
                                        <option value="Sweden">Sweden</option>
                                        <option value="Switzerland">Switzerland</option>
                                        <option value="Syria">Syria</option>
                                        <option value="Taiwan">Taiwan</option>
                                        <option value="Tajikistan">Tajikistan</option>
                                        <option value="Tanzania">Tanzania</option>
                                        <option value="Thailand">Thailand</option>
                                        <option value="Tobago">Tobago</option>
                                        <option value="Toga">Toga</option>
                                        <option value="Tokelau">Tokelau</option>
                                        <option value="Tonga">Tonga</option>
                                        <option value="Trinidad">Trinidad</option>
                                        <option value="Tunisia">Tunisia</option>
                                        <option value="Turkey">Turkey</option>
                                        <option value="Turkmenistan">Turkmenistan</option>
                                        <option value="Tuvalu">Tuvalu</option>
                                        <option value="Uganda">Uganda</option>
                                        <option value="Ukraine">Ukraine</option>
                                        <option value="United Arab Emirates">United Arab Emirates</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="Uruguay">Uruguay</option>
                                        <option value="USA">USA</option>
                                        <option value="Uzbekistan">Uzbekistan</option>
                                        <option value="Vanuatu">Vanuatu</option>
                                        <option value="Venezuela">Venezuela</option>
                                        <option value="Vietnam">Vietnam</option>
                                        <option value="Virgin Islands">Virgin Islands</option>
                                        <option value="Wales">Wales</option>
                                        <option value="Wallis and Futuna">Wallis and Futuna</option>
                                        <option value="West Bank">West Bank</option>
                                        <option value="Western Sahara">Western Sahara</option>
                                        <option value="Yemen">Yemen</option>
                                        <option value="Yugoslavia">Yugoslavia</option>
                                        <option value="Zambia">Zambia</option>
                                        <option value="Zimbabwe">Zimbabwe</option>
                                    </select>
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="team" className="col-form-label">State/County</label>
                                    <select className='form-control'>
                                        <option value="">Select State</option>
                                        <option value=""></option>
                                    </select>
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="team" className="col-form-label">Post Code</label>
                                    <input type="text" className="form-control" id="team" />
                                </div>

                            </div>
                        </div>
                        <hr />
                        <div className='row'>
                            <div className='col-md-6 mb-1'>
                                <h4>Patient Details</h4>
                                <div className="mb-1">
                                    <label htmlFor="team" className="col-form-label">Unique Indentifier</label>
                                    <input type="text" className="form-control" id="team" />
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="team" className="col-form-label">First Name</label>
                                    <input type="text" className="form-control" id="team" />

                                </div>
                                <div className="mb-1 ">
                                    <label htmlFor="team" className="col-form-label">Last Name</label>
                                    <input type="text" className="form-control" id="team" />

                                </div>
                                <div className="mb-1">
                                    <label htmlFor="team" className="col-form-label">Gender</label>
                                    <select className='form-control'>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>

                                </div>
                                <div className="mb-1">
                                    <label htmlFor="team" className="col-form-label">Email Address</label>
                                    <input type="text" className="form-control" id="team" />

                                </div>
                                <div className="mb-1">
                                    <label htmlFor="team" className="col-form-label">Confirm Email</label>
                                    <input type="text" className="form-control" id="team" />
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="team" className="col-form-label">Ethnicity</label>
                                    <select className="form-control" id="ethnicityid" name="ethnicityid">
                                        <option value="0">Select Ethnicity</option>
                                        <optgroup label="White">White</optgroup>
                                        <option value="6">A&nbsp;&nbsp;-&nbsp;&nbsp;British</option>
                                        <option value="7">B&nbsp;&nbsp;-&nbsp;&nbsp;Irish</option>
                                        <option value="8">C&nbsp;&nbsp;-&nbsp;&nbsp;Any other White background</option>
                                        <optgroup label="Mixed">Mixed</optgroup>
                                        <option value="9">D&nbsp;&nbsp;-&nbsp;&nbsp;White and Black Caribbean</option>
                                        <option value="10">E&nbsp;&nbsp;-&nbsp;&nbsp;White and Black African</option>
                                        <option value="11">F&nbsp;&nbsp;-&nbsp;&nbsp;White and Asian</option>
                                        <option value="12">G&nbsp;&nbsp;-&nbsp;&nbsp;Any other mixed background</option>
                                        <optgroup label="Asian or Asian British">Asian or Asian British</optgroup>
                                        <option value="13">H&nbsp;&nbsp;-&nbsp;&nbsp;Indian</option>
                                        <option value="14">J&nbsp;&nbsp;-&nbsp;&nbsp;Pakistani</option>
                                        <option value="15">K&nbsp;&nbsp;-&nbsp;&nbsp;Bangladeshi</option>
                                        <option value="16">L&nbsp;&nbsp;-&nbsp;&nbsp;Any other Asian background</option>
                                        <optgroup label="Black or Black British">Black or Black British</optgroup>
                                        <option value="17">M&nbsp;&nbsp;-&nbsp;&nbsp;Caribbean</option>
                                        <option value="18">N&nbsp;&nbsp;-&nbsp;&nbsp;African</option>
                                        <option value="19">P&nbsp;&nbsp;-&nbsp;&nbsp;Any other Black background</option>
                                        <optgroup label="Other Ethnic Groups">Other Ethnic Groups</optgroup>
                                        <option value="20">R&nbsp;&nbsp;-&nbsp;&nbsp;Chinese</option>
                                        <option value="21">S&nbsp;&nbsp;-&nbsp;&nbsp;Any other ethnic group</option>
                                        <option value="22">999&nbsp;&nbsp;-&nbsp;&nbsp;Not stated</option>
                                        <optgroup label="Patient Declined to confirm">Patient Declined to confirm</optgroup>
                                    </select>
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="team" className="col-form-label">Profile Picture</label>
                                    <input type="file" className="form-control" id="team" />
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="team" className="col-form-label">Date Of Birth</label>
                                    <input type="date" className="form-control" id="team" />
                                </div>
                            </div>
                            <div className='col-md-6 mb-1'>
                                <h4>Contact Details</h4>
                                <div className="mb-1">
                                    <label htmlFor="team" className="col-form-label">Address Line 1</label>
                                    <input type="text" className="form-control" id="team" />
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="team" className="col-form-label">Address Line 2</label>
                                    <input type="text" className="form-control" id="team" />
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="team" className="col-form-label">City</label>
                                    <input type="text" className="form-control" id="team" />
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="team" className="col-form-label">Country</label>
                                    <select className='form-control'>
                                        <option value="">Select Country</option>
                                        <option value="Afghanistan">Afghanistan</option>
                                        <option value="Albania">Albania</option>
                                        <option value="Algeria">Algeria</option>
                                        <option value="American Samoa">American Samoa</option>
                                        <option value="Angola">Angola</option>
                                        <option value="Anguilla">Anguilla</option>
                                        <option value="Antartica">Antartica</option>
                                        <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                        <option value="Argentina">Argentina</option>
                                        <option value="Armenia">Armenia</option>
                                        <option value="Aruba">Aruba</option>
                                        <option value="Ashmore and Cartier Island">Ashmore and Cartier Island</option>
                                        <option value="Australia">Australia</option>
                                        <option value="Austria">Austria</option>
                                        <option value="Azerbaijan">Azerbaijan</option>
                                        <option value="Bahamas">Bahamas</option>
                                        <option value="Bahrain">Bahrain</option>
                                        <option value="Bangladesh">Bangladesh</option>
                                        <option value="Barbados">Barbados</option>
                                        <option value="Belarus">Belarus</option>
                                        <option value="Belgium">Belgium</option>
                                        <option value="Belize">Belize</option>
                                        <option value="Benin">Benin</option>
                                        <option value="Bermuda">Bermuda</option>
                                        <option value="Bhutan">Bhutan</option>
                                        <option value="Bolivia">Bolivia</option>
                                        <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                        <option value="Botswana">Botswana</option>
                                        <option value="Brazil">Brazil</option>
                                        <option value="British Virgin Islands">British Virgin Islands</option>
                                        <option value="Brunei">Brunei</option>
                                        <option value="Bulgaria">Bulgaria</option>
                                        <option value="Burkina Faso">Burkina Faso</option>
                                        <option value="Burma">Burma</option>
                                        <option value="Burundi">Burundi</option>
                                        <option value="Cambodia">Cambodia</option>
                                        <option value="Cameroon">Cameroon</option>
                                        <option value="Canada">Canada</option>
                                        <option value="Cape Verde">Cape Verde</option>
                                        <option value="Cayman Islands">Cayman Islands</option>
                                        <option value="Central African Republic">Central African Republic</option>
                                        <option value="Chad">Chad</option>
                                        <option value="Chile">Chile</option>
                                        <option value="China">China</option>
                                        <option value="Christmas Island">Christmas Island</option>
                                        <option value="Clipperton Island">Clipperton Island</option>
                                        <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                        <option value="Colombia">Colombia</option>
                                        <option value="Comoros">Comoros</option>
                                        <option value="Congo, Democratic Republic of the">Congo, Democratic Republic of the</option>
                                        <option value="Congo, Republic of the">Congo, Republic of the</option>
                                        <option value="Cook Islands">Cook Islands</option>
                                        <option value="Costa Rica">Costa Rica</option>
                                        <option value="Cote dIvoire">Cote d Ivoire</option>
                                        <option value="Croatia">Croatia</option>
                                        <option value="Cuba">Cuba</option>
                                        <option value="Cyprus">Cyprus</option>
                                        <option value="Czeck Republic">Czeck Republic</option>
                                        <option value="Denmark">Denmark</option>
                                        <option value="Djibouti">Djibouti</option>
                                        <option value="Dominica">Dominica</option>
                                        <option value="Dominican Republic">Dominican Republic</option>
                                        <option value="Ecuador">Ecuador</option>
                                        <option value="Egypt">Egypt</option>
                                        <option value="El Salvador">El Salvador</option>
                                        <option value="Equatorial Guinea">Equatorial Guinea</option>
                                        <option value="Eritrea">Eritrea</option>
                                        <option value="Estonia">Estonia</option>
                                        <option value="Ethiopia">Ethiopia</option>
                                        <option value="Europa Island">Europa Island</option>
                                        <option value="Falkland Islands (Islas Malvinas)">Falkland Islands (Islas Malvinas)</option>
                                        <option value="Faroe Islands">Faroe Islands</option>
                                        <option value="Fiji">Fiji</option>
                                        <option value="Finland">Finland</option>
                                        <option value="France">France</option>
                                        <option value="French Guiana">French Guiana</option>
                                        <option value="French Polynesia">French Polynesia</option>
                                        <option value="French Southern and Antarctic Lands">French Southern and Antarctic Lands</option>
                                        <option value="Gabon">Gabon</option>
                                        <option value="Gambia, The">Gambia, The</option>
                                        <option value="Gaza Strip">Gaza Strip</option>
                                        <option value="Georgia">Georgia</option>
                                        <option value="Germany">Germany</option>
                                        <option value="Ghana">Ghana</option>
                                        <option value="Gibraltar">Gibraltar</option>
                                        <option value="Glorioso Islands">Glorioso Islands</option>
                                        <option value="Greece">Greece</option>
                                        <option value="Greenland">Greenland</option>
                                        <option value="Grenada">Grenada</option>
                                        <option value="Guadeloupe">Guadeloupe</option>
                                        <option value="Guam">Guam</option>
                                        <option value="Guatemala">Guatemala</option>
                                        <option value="Guernsey">Guernsey</option>
                                        <option value="Guinea">Guinea</option>
                                        <option value="Guinea-Bissau">Guinea-Bissau</option>
                                        <option value="Guyana">Guyana</option>
                                        <option value="Haiti">Haiti</option>
                                        <option value="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option>
                                        <option value="Holy See (Vatican City)">Holy See (Vatican City)</option>
                                        <option value="Honduras">Honduras</option>
                                        <option value="Hong Kong">Hong Kong</option>
                                        <option value="Howland Island">Howland Island</option>
                                        <option value="Hungary">Hungary</option>
                                        <option value="Iceland">Iceland</option>
                                        <option value="India">India</option>
                                        <option value="Indonesia">Indonesia</option>
                                        <option value="Iran">Iran</option>
                                        <option value="Iraq">Iraq</option>
                                        <option value="Ireland">Ireland</option>
                                        <option value="Ireland, Northern">Ireland, Northern</option>
                                        <option value="Israel">Israel</option>
                                        <option value="Italy">Italy</option>
                                        <option value="Jamaica">Jamaica</option>
                                        <option value="Jan Mayen">Jan Mayen</option>
                                        <option value="Japan">Japan</option>
                                        <option value="Jarvis Island">Jarvis Island</option>
                                        <option value="Jersey">Jersey</option>
                                        <option value="Johnston Atoll">Johnston Atoll</option>
                                        <option value="Jordan">Jordan</option>
                                        <option value="Juan de Nova Island">Juan de Nova Island</option>
                                        <option value="Kazakhstan">Kazakhstan</option>
                                        <option value="Kenya">Kenya</option>
                                        <option value="Kiribati">Kiribati</option>
                                        <option value="Korea, North">Korea, North</option>
                                        <option value="Korea, South">Korea, South</option>
                                        <option value="Kuwait">Kuwait</option>
                                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                                        <option value="Laos">Laos</option>
                                        <option value="Latvia">Latvia</option>
                                        <option value="Lebanon">Lebanon</option>
                                        <option value="Lesotho">Lesotho</option>
                                        <option value="Liberia">Liberia</option>
                                        <option value="Libya">Libya</option>
                                        <option value="Liechtenstein">Liechtenstein</option>
                                        <option value="Lithuania">Lithuania</option>
                                        <option value="Luxembourg">Luxembourg</option>
                                        <option value="Macau">Macau</option>
                                        <option value="Macedonia, Former Yugoslav Republic of">Macedonia, Former Yugoslav Republic of</option>
                                        <option value="Madagascar">Madagascar</option>
                                        <option value="Malawi">Malawi</option>
                                        <option value="Malaysia">Malaysia</option>
                                        <option value="Maldives">Maldives</option>
                                        <option value="Mali">Mali</option>
                                        <option value="Malta">Malta</option>
                                        <option value="Man, Isle of">Man, Isle of</option>
                                        <option value="Marshall Islands">Marshall Islands</option>
                                        <option value="Martinique">Martinique</option>
                                        <option value="Mauritania">Mauritania</option>
                                        <option value="Mauritius">Mauritius</option>
                                        <option value="Mayotte">Mayotte</option>
                                        <option value="Mexico">Mexico</option>
                                        <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                                        <option value="Midway Islands">Midway Islands</option>
                                        <option value="Moldova">Moldova</option>
                                        <option value="Monaco">Monaco</option>
                                        <option value="Mongolia">Mongolia</option>
                                        <option value="Montserrat">Montserrat</option>
                                        <option value="Morocco">Morocco</option>
                                        <option value="Mozambique">Mozambique</option>
                                        <option value="Namibia">Namibia</option>
                                        <option value="Nauru">Nauru</option>
                                        <option value="Nepal">Nepal</option>
                                        <option value="Netherlands">Netherlands</option>
                                        <option value="Netherlands Antilles">Netherlands Antilles</option>
                                        <option value="New Caledonia">New Caledonia</option>
                                        <option value="New Zealand">New Zealand</option>
                                        <option value="Nicaragua">Nicaragua</option>
                                        <option value="Niger">Niger</option>
                                        <option value="Nigeria">Nigeria</option>
                                        <option value="Niue">Niue</option>
                                        <option value="Norfolk Island">Norfolk Island</option>
                                        <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                        <option value="Norway">Norway</option>
                                        <option value="Oman">Oman</option>
                                        <option value="Pakistan">Pakistan</option>
                                        <option value="Palau">Palau</option>
                                        <option value="Panama">Panama</option>
                                        <option value="Papua New Guinea">Papua New Guinea</option>
                                        <option value="Paraguay">Paraguay</option>
                                        <option value="Peru">Peru</option>
                                        <option value="Philippines">Philippines</option>
                                        <option value="Pitcaim Islands">Pitcaim Islands</option>
                                        <option value="Poland">Poland</option>
                                        <option value="Portugal">Portugal</option>
                                        <option value="Puerto Rico">Puerto Rico</option>
                                        <option value="Qatar">Qatar</option>
                                        <option value="Reunion">Reunion</option>
                                        <option value="Romainia">Romainia</option>
                                        <option value="Russia">Russia</option>
                                        <option value="Rwanda">Rwanda</option>
                                        <option value="Saint Helena">Saint Helena</option>
                                        <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                        <option value="Saint Lucia">Saint Lucia</option>
                                        <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                        <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                                        <option value="Samoa">Samoa</option>
                                        <option value="San Marino">San Marino</option>
                                        <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                        <option value="Saudi Arabia">Saudi Arabia</option>
                                        <option value="Scotland">Scotland</option>
                                        <option value="Senegal">Senegal</option>
                                        <option value="Seychelles">Seychelles</option>
                                        <option value="Sierra Leone">Sierra Leone</option>
                                        <option value="Singapore">Singapore</option>
                                        <option value="Slovakia">Slovakia</option>
                                        <option value="Slovenia">Slovenia</option>
                                        <option value="Solomon Islands">Solomon Islands</option>
                                        <option value="Somalia">Somalia</option>
                                        <option value="South Africa">South Africa</option>
                                        <option value="South Georgia and South Sandwich Islands">South Georgia and South Sandwich Islands</option>
                                        <option value="Spain">Spain</option>
                                        <option value="Spratly Islands">Spratly Islands</option>
                                        <option value="Sri Lanka">Sri Lanka</option>
                                        <option value="Sudan">Sudan</option>
                                        <option value="Suriname">Suriname</option>
                                        <option value="Svalbard">Svalbard</option>
                                        <option value="Swaziland">Swaziland</option>
                                        <option value="Sweden">Sweden</option>
                                        <option value="Switzerland">Switzerland</option>
                                        <option value="Syria">Syria</option>
                                        <option value="Taiwan">Taiwan</option>
                                        <option value="Tajikistan">Tajikistan</option>
                                        <option value="Tanzania">Tanzania</option>
                                        <option value="Thailand">Thailand</option>
                                        <option value="Tobago">Tobago</option>
                                        <option value="Toga">Toga</option>
                                        <option value="Tokelau">Tokelau</option>
                                        <option value="Tonga">Tonga</option>
                                        <option value="Trinidad">Trinidad</option>
                                        <option value="Tunisia">Tunisia</option>
                                        <option value="Turkey">Turkey</option>
                                        <option value="Turkmenistan">Turkmenistan</option>
                                        <option value="Tuvalu">Tuvalu</option>
                                        <option value="Uganda">Uganda</option>
                                        <option value="Ukraine">Ukraine</option>
                                        <option value="United Arab Emirates">United Arab Emirates</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="Uruguay">Uruguay</option>
                                        <option value="USA">USA</option>
                                        <option value="Uzbekistan">Uzbekistan</option>
                                        <option value="Vanuatu">Vanuatu</option>
                                        <option value="Venezuela">Venezuela</option>
                                        <option value="Vietnam">Vietnam</option>
                                        <option value="Virgin Islands">Virgin Islands</option>
                                        <option value="Wales">Wales</option>
                                        <option value="Wallis and Futuna">Wallis and Futuna</option>
                                        <option value="West Bank">West Bank</option>
                                        <option value="Western Sahara">Western Sahara</option>
                                        <option value="Yemen">Yemen</option>
                                        <option value="Yugoslavia">Yugoslavia</option>
                                        <option value="Zambia">Zambia</option>
                                        <option value="Zimbabwe">Zimbabwe</option>
                                    </select>
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="team" className="col-form-label">State/County</label>
                                    <select className='form-control'>
                                        <option value="">Select State</option>
                                        <option value=""></option>
                                    </select>
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="team" className="col-form-label">Post Code</label>
                                    <input type="text" className="form-control" id="team" />
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="team" className="col-form-label">Landline</label>
                                    <input type="text" className="form-control" id="team" />
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="team" className="col-form-label">Mobile<small>(Preferred)</small> </label>
                                    <input type="text" className="form-control" id="team" />
                                </div>

                            </div>
                        </div>

                        <hr />
                        <div className='row'>
                            <div className='col-md-6 mb-1'>
                                <h4>Parent Details / Nearest Relative</h4>
                                <div className="mb-1">
                                    <label htmlFor="team" className="col-form-label">Unique Indentifier</label>
                                    <input type="text" className="form-control" id="team" />
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="team" className="col-form-label">First Name</label>
                                    <input type="text" className="form-control" id="team" />

                                </div>
                                <div className="mb-1 ">
                                    <label htmlFor="team" className="col-form-label">Last Name</label>
                                    <input type="text" className="form-control" id="team" />

                                </div>
                                <div className="mb-1">
                                    <label htmlFor="team" className="col-form-label">Email Address</label>
                                    <input type="text" className="form-control" id="team" />

                                </div>
                                <div className="mb-1">
                                    <label htmlFor="team" className="col-form-label">Confirm Email</label>
                                    <input type="text" className="form-control" id="team" />
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="team" className="col-form-label">Landline</label>
                                    <input type="text" className="form-control" id="team" />
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="team" className="col-form-label">Mobile<small>(Preferred)</small></label>
                                    <input type="text" className="form-control" id="team" />
                                </div>

                            </div>
                            <div className='col-md-6 mb-1'>
                                <h4>Contact Details</h4>
                                <div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                        <label className="form-check-label" htmlFor="inlineCheckbox1">Same as Patient</label>
                                    </div>
                                </div>

                                <div className="mb-1">
                                    <label htmlFor="team" className="col-form-label">Address Line 1</label>
                                    <input type="text" className="form-control" id="team" />
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="team" className="col-form-label">Address Line 2</label>
                                    <input type="text" className="form-control" id="team" />
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="team" className="col-form-label">City</label>
                                    <input type="text" className="form-control" id="team" />
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="team" className="col-form-label">Country</label>
                                    <select className='form-control'>
                                        <option value="">Select Country</option>
                                        <option value="Afghanistan">Afghanistan</option>
                                        <option value="Albania">Albania</option>
                                        <option value="Algeria">Algeria</option>
                                        <option value="American Samoa">American Samoa</option>
                                        <option value="Angola">Angola</option>
                                        <option value="Anguilla">Anguilla</option>
                                        <option value="Antartica">Antartica</option>
                                        <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                        <option value="Argentina">Argentina</option>
                                        <option value="Armenia">Armenia</option>
                                        <option value="Aruba">Aruba</option>
                                        <option value="Ashmore and Cartier Island">Ashmore and Cartier Island</option>
                                        <option value="Australia">Australia</option>
                                        <option value="Austria">Austria</option>
                                        <option value="Azerbaijan">Azerbaijan</option>
                                        <option value="Bahamas">Bahamas</option>
                                        <option value="Bahrain">Bahrain</option>
                                        <option value="Bangladesh">Bangladesh</option>
                                        <option value="Barbados">Barbados</option>
                                        <option value="Belarus">Belarus</option>
                                        <option value="Belgium">Belgium</option>
                                        <option value="Belize">Belize</option>
                                        <option value="Benin">Benin</option>
                                        <option value="Bermuda">Bermuda</option>
                                        <option value="Bhutan">Bhutan</option>
                                        <option value="Bolivia">Bolivia</option>
                                        <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                        <option value="Botswana">Botswana</option>
                                        <option value="Brazil">Brazil</option>
                                        <option value="British Virgin Islands">British Virgin Islands</option>
                                        <option value="Brunei">Brunei</option>
                                        <option value="Bulgaria">Bulgaria</option>
                                        <option value="Burkina Faso">Burkina Faso</option>
                                        <option value="Burma">Burma</option>
                                        <option value="Burundi">Burundi</option>
                                        <option value="Cambodia">Cambodia</option>
                                        <option value="Cameroon">Cameroon</option>
                                        <option value="Canada">Canada</option>
                                        <option value="Cape Verde">Cape Verde</option>
                                        <option value="Cayman Islands">Cayman Islands</option>
                                        <option value="Central African Republic">Central African Republic</option>
                                        <option value="Chad">Chad</option>
                                        <option value="Chile">Chile</option>
                                        <option value="China">China</option>
                                        <option value="Christmas Island">Christmas Island</option>
                                        <option value="Clipperton Island">Clipperton Island</option>
                                        <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                        <option value="Colombia">Colombia</option>
                                        <option value="Comoros">Comoros</option>
                                        <option value="Congo, Democratic Republic of the">Congo, Democratic Republic of the</option>
                                        <option value="Congo, Republic of the">Congo, Republic of the</option>
                                        <option value="Cook Islands">Cook Islands</option>
                                        <option value="Costa Rica">Costa Rica</option>
                                        <option value="Cote dIvoire">Cote d Ivoire</option>
                                        <option value="Croatia">Croatia</option>
                                        <option value="Cuba">Cuba</option>
                                        <option value="Cyprus">Cyprus</option>
                                        <option value="Czeck Republic">Czeck Republic</option>
                                        <option value="Denmark">Denmark</option>
                                        <option value="Djibouti">Djibouti</option>
                                        <option value="Dominica">Dominica</option>
                                        <option value="Dominican Republic">Dominican Republic</option>
                                        <option value="Ecuador">Ecuador</option>
                                        <option value="Egypt">Egypt</option>
                                        <option value="El Salvador">El Salvador</option>
                                        <option value="Equatorial Guinea">Equatorial Guinea</option>
                                        <option value="Eritrea">Eritrea</option>
                                        <option value="Estonia">Estonia</option>
                                        <option value="Ethiopia">Ethiopia</option>
                                        <option value="Europa Island">Europa Island</option>
                                        <option value="Falkland Islands (Islas Malvinas)">Falkland Islands (Islas Malvinas)</option>
                                        <option value="Faroe Islands">Faroe Islands</option>
                                        <option value="Fiji">Fiji</option>
                                        <option value="Finland">Finland</option>
                                        <option value="France">France</option>
                                        <option value="French Guiana">French Guiana</option>
                                        <option value="French Polynesia">French Polynesia</option>
                                        <option value="French Southern and Antarctic Lands">French Southern and Antarctic Lands</option>
                                        <option value="Gabon">Gabon</option>
                                        <option value="Gambia, The">Gambia, The</option>
                                        <option value="Gaza Strip">Gaza Strip</option>
                                        <option value="Georgia">Georgia</option>
                                        <option value="Germany">Germany</option>
                                        <option value="Ghana">Ghana</option>
                                        <option value="Gibraltar">Gibraltar</option>
                                        <option value="Glorioso Islands">Glorioso Islands</option>
                                        <option value="Greece">Greece</option>
                                        <option value="Greenland">Greenland</option>
                                        <option value="Grenada">Grenada</option>
                                        <option value="Guadeloupe">Guadeloupe</option>
                                        <option value="Guam">Guam</option>
                                        <option value="Guatemala">Guatemala</option>
                                        <option value="Guernsey">Guernsey</option>
                                        <option value="Guinea">Guinea</option>
                                        <option value="Guinea-Bissau">Guinea-Bissau</option>
                                        <option value="Guyana">Guyana</option>
                                        <option value="Haiti">Haiti</option>
                                        <option value="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option>
                                        <option value="Holy See (Vatican City)">Holy See (Vatican City)</option>
                                        <option value="Honduras">Honduras</option>
                                        <option value="Hong Kong">Hong Kong</option>
                                        <option value="Howland Island">Howland Island</option>
                                        <option value="Hungary">Hungary</option>
                                        <option value="Iceland">Iceland</option>
                                        <option value="India">India</option>
                                        <option value="Indonesia">Indonesia</option>
                                        <option value="Iran">Iran</option>
                                        <option value="Iraq">Iraq</option>
                                        <option value="Ireland">Ireland</option>
                                        <option value="Ireland, Northern">Ireland, Northern</option>
                                        <option value="Israel">Israel</option>
                                        <option value="Italy">Italy</option>
                                        <option value="Jamaica">Jamaica</option>
                                        <option value="Jan Mayen">Jan Mayen</option>
                                        <option value="Japan">Japan</option>
                                        <option value="Jarvis Island">Jarvis Island</option>
                                        <option value="Jersey">Jersey</option>
                                        <option value="Johnston Atoll">Johnston Atoll</option>
                                        <option value="Jordan">Jordan</option>
                                        <option value="Juan de Nova Island">Juan de Nova Island</option>
                                        <option value="Kazakhstan">Kazakhstan</option>
                                        <option value="Kenya">Kenya</option>
                                        <option value="Kiribati">Kiribati</option>
                                        <option value="Korea, North">Korea, North</option>
                                        <option value="Korea, South">Korea, South</option>
                                        <option value="Kuwait">Kuwait</option>
                                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                                        <option value="Laos">Laos</option>
                                        <option value="Latvia">Latvia</option>
                                        <option value="Lebanon">Lebanon</option>
                                        <option value="Lesotho">Lesotho</option>
                                        <option value="Liberia">Liberia</option>
                                        <option value="Libya">Libya</option>
                                        <option value="Liechtenstein">Liechtenstein</option>
                                        <option value="Lithuania">Lithuania</option>
                                        <option value="Luxembourg">Luxembourg</option>
                                        <option value="Macau">Macau</option>
                                        <option value="Macedonia, Former Yugoslav Republic of">Macedonia, Former Yugoslav Republic of</option>
                                        <option value="Madagascar">Madagascar</option>
                                        <option value="Malawi">Malawi</option>
                                        <option value="Malaysia">Malaysia</option>
                                        <option value="Maldives">Maldives</option>
                                        <option value="Mali">Mali</option>
                                        <option value="Malta">Malta</option>
                                        <option value="Man, Isle of">Man, Isle of</option>
                                        <option value="Marshall Islands">Marshall Islands</option>
                                        <option value="Martinique">Martinique</option>
                                        <option value="Mauritania">Mauritania</option>
                                        <option value="Mauritius">Mauritius</option>
                                        <option value="Mayotte">Mayotte</option>
                                        <option value="Mexico">Mexico</option>
                                        <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                                        <option value="Midway Islands">Midway Islands</option>
                                        <option value="Moldova">Moldova</option>
                                        <option value="Monaco">Monaco</option>
                                        <option value="Mongolia">Mongolia</option>
                                        <option value="Montserrat">Montserrat</option>
                                        <option value="Morocco">Morocco</option>
                                        <option value="Mozambique">Mozambique</option>
                                        <option value="Namibia">Namibia</option>
                                        <option value="Nauru">Nauru</option>
                                        <option value="Nepal">Nepal</option>
                                        <option value="Netherlands">Netherlands</option>
                                        <option value="Netherlands Antilles">Netherlands Antilles</option>
                                        <option value="New Caledonia">New Caledonia</option>
                                        <option value="New Zealand">New Zealand</option>
                                        <option value="Nicaragua">Nicaragua</option>
                                        <option value="Niger">Niger</option>
                                        <option value="Nigeria">Nigeria</option>
                                        <option value="Niue">Niue</option>
                                        <option value="Norfolk Island">Norfolk Island</option>
                                        <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                        <option value="Norway">Norway</option>
                                        <option value="Oman">Oman</option>
                                        <option value="Pakistan">Pakistan</option>
                                        <option value="Palau">Palau</option>
                                        <option value="Panama">Panama</option>
                                        <option value="Papua New Guinea">Papua New Guinea</option>
                                        <option value="Paraguay">Paraguay</option>
                                        <option value="Peru">Peru</option>
                                        <option value="Philippines">Philippines</option>
                                        <option value="Pitcaim Islands">Pitcaim Islands</option>
                                        <option value="Poland">Poland</option>
                                        <option value="Portugal">Portugal</option>
                                        <option value="Puerto Rico">Puerto Rico</option>
                                        <option value="Qatar">Qatar</option>
                                        <option value="Reunion">Reunion</option>
                                        <option value="Romainia">Romainia</option>
                                        <option value="Russia">Russia</option>
                                        <option value="Rwanda">Rwanda</option>
                                        <option value="Saint Helena">Saint Helena</option>
                                        <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                        <option value="Saint Lucia">Saint Lucia</option>
                                        <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                        <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                                        <option value="Samoa">Samoa</option>
                                        <option value="San Marino">San Marino</option>
                                        <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                        <option value="Saudi Arabia">Saudi Arabia</option>
                                        <option value="Scotland">Scotland</option>
                                        <option value="Senegal">Senegal</option>
                                        <option value="Seychelles">Seychelles</option>
                                        <option value="Sierra Leone">Sierra Leone</option>
                                        <option value="Singapore">Singapore</option>
                                        <option value="Slovakia">Slovakia</option>
                                        <option value="Slovenia">Slovenia</option>
                                        <option value="Solomon Islands">Solomon Islands</option>
                                        <option value="Somalia">Somalia</option>
                                        <option value="South Africa">South Africa</option>
                                        <option value="South Georgia and South Sandwich Islands">South Georgia and South Sandwich Islands</option>
                                        <option value="Spain">Spain</option>
                                        <option value="Spratly Islands">Spratly Islands</option>
                                        <option value="Sri Lanka">Sri Lanka</option>
                                        <option value="Sudan">Sudan</option>
                                        <option value="Suriname">Suriname</option>
                                        <option value="Svalbard">Svalbard</option>
                                        <option value="Swaziland">Swaziland</option>
                                        <option value="Sweden">Sweden</option>
                                        <option value="Switzerland">Switzerland</option>
                                        <option value="Syria">Syria</option>
                                        <option value="Taiwan">Taiwan</option>
                                        <option value="Tajikistan">Tajikistan</option>
                                        <option value="Tanzania">Tanzania</option>
                                        <option value="Thailand">Thailand</option>
                                        <option value="Tobago">Tobago</option>
                                        <option value="Toga">Toga</option>
                                        <option value="Tokelau">Tokelau</option>
                                        <option value="Tonga">Tonga</option>
                                        <option value="Trinidad">Trinidad</option>
                                        <option value="Tunisia">Tunisia</option>
                                        <option value="Turkey">Turkey</option>
                                        <option value="Turkmenistan">Turkmenistan</option>
                                        <option value="Tuvalu">Tuvalu</option>
                                        <option value="Uganda">Uganda</option>
                                        <option value="Ukraine">Ukraine</option>
                                        <option value="United Arab Emirates">United Arab Emirates</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="Uruguay">Uruguay</option>
                                        <option value="USA">USA</option>
                                        <option value="Uzbekistan">Uzbekistan</option>
                                        <option value="Vanuatu">Vanuatu</option>
                                        <option value="Venezuela">Venezuela</option>
                                        <option value="Vietnam">Vietnam</option>
                                        <option value="Virgin Islands">Virgin Islands</option>
                                        <option value="Wales">Wales</option>
                                        <option value="Wallis and Futuna">Wallis and Futuna</option>
                                        <option value="West Bank">West Bank</option>
                                        <option value="Western Sahara">Western Sahara</option>
                                        <option value="Yemen">Yemen</option>
                                        <option value="Yugoslavia">Yugoslavia</option>
                                        <option value="Zambia">Zambia</option>
                                        <option value="Zimbabwe">Zimbabwe</option>
                                    </select>
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="team" className="col-form-label">State/County</label>
                                    <select className='form-control'>
                                        <option value="">Select State</option>
                                        <option value=""></option>
                                    </select>
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="team" className="col-form-label">Post Code</label>
                                    <input type="text" className="form-control" id="team" />
                                </div>

                            </div>
                        </div>

                        <hr />
                        <div className='mb-5'>
                            <h4 className='mb-2'>Reasons for Referral</h4>
                            <label className="col-form-label">NATURE OF CONCERNS:-</label>

                            <div className='row mb-2'>
                                <div className='col-md-4'>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="check1" />
                                        <label className="form-check-label" htmlFor="check1">
                                            DEPRESSION
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="check2" />
                                        <label className="form-check-label" htmlFor="check2">
                                            PSYCHOSIS / MANIA
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="check3" />
                                        <label className="form-check-label" htmlFor="check3">
                                            ADHD / Autism / Tics / Learning Disability
                                        </label>
                                    </div>
                                </div>

                                <div className='col-md-4'>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="check4" />
                                        <label className="form-check-label" htmlFor="check4">
                                            PANIC / OCD / PHOBIAS
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="check5" />
                                        <label className="form-check-label" htmlFor="check5">
                                            EATING DISORDERS
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="check6" />
                                        <label className="form-check-label" htmlFor="check6">
                                            Other
                                        </label>
                                    </div>
                                </div>

                                <div className='col-md-4'>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="check7" />
                                        <label className="form-check-label" htmlFor="check7">
                                            General Health Check
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="check8" />
                                        <label className="form-check-label" htmlFor="check8">
                                            SELF HARM
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="check9" />
                                        <label className="form-check-label" htmlFor="check9">
                                            Test
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-1">
                                <label htmlFor="team" className="col-form-label">DESCRIBE THE ISSUES / CONCERNS AND UPLOAD ANY PREVIOUS REPORTS / DESCRIPTIVE ACCOUNT</label>
                                <textarea name="" id="" cols="30" rows="4" className='form-control'></textarea>
                            </div>
                            <div className="mb-1">
                                <label className="col-form-label">Upload relevant documents</label>
                                <input type="file" className='form-control' />
                            </div>
                        </div>

                        <hr />

                        <div className='row mb-3'>
                            <div className='col-md-6 mb-1'>
                                <div className="mb-1">
                                    <label htmlFor="team" className="col-form-label">Payment Type</label>
                                    <select className="form-control" id="paymenttype" name="paymenttype">
                                        <option value="Medical Insurance">Medical Insurance </option>
                                        <option value="Self Pay">Self Pay</option>
                                        <option value="NHS">NHS</option>
                                    </select>
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="team" className="col-form-label">Insurance Provider Name</label>
                                    <input type="text" className="form-control" id="team" />

                                </div>
                                <div className="mb-1 ">
                                    <label htmlFor="team" className="col-form-label">Pre-Authorization Code</label>
                                    <input type="text" className="form-control" id="team" />

                                </div>
                                <div className="mb-1">
                                    <label htmlFor="team" className="col-form-label">Policy Number</label>
                                    <input type="text" className="form-control" id="team" />
                                </div>
                            </div>
                            <div className='col-md-6 mb-1'>

                                <div className="mb-1">
                                    <label htmlFor="team" className="col-form-label">Referral Outcome</label>
                                    <select className="form-control" id="refoutcome" name="refoutcome">
                                        <option value="0">Referral Outcome</option>
                                        <optgroup label="Accepted">Accepted</optgroup>
                                        <option value="4">01&nbsp;&nbsp;-&nbsp;&nbsp;Accepted - Urgent Appointment</option>
                                        <option value="5">02&nbsp;&nbsp;-&nbsp;&nbsp;Accepted and placed on appointment waiting list</option>
                                        <option value="9">06&nbsp;&nbsp;-&nbsp;&nbsp;Accepted Appointment Offered</option>
                                        <optgroup label="Not Accepted">Not Accepted</optgroup>
                                        <option value="6">03&nbsp;&nbsp;-&nbsp;&nbsp;Service request passed back to referrer</option>
                                        <option value="7">04&nbsp;&nbsp;-&nbsp;&nbsp;Service request redirected to another agency</option>
                                        <optgroup label="Closed">Closed</optgroup>
                                        <option value="8">05&nbsp;&nbsp;-&nbsp;&nbsp;Patient declined to be treated</option>
                                    </select>
                                </div>

                            </div>
                        </div>





                        <div className='d-flex gap-1 justify-content-end'>
                            <button className='btn btn-sm btn-dark'>Back</button>
                            <button className='btn btn-sm btn-success'>Update</button>
                        </div>
                    </form>
                </div>

            </div>

        </>
    )
}
