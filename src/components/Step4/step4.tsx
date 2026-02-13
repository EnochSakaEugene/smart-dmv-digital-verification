import React from "react";
import "../../wizard/wizard.css";
import DMVHeader from "../common/DMVHeader";
import SignaturePadField from "../common/SignaturePadField";

type Props = {
  onPrev: () => void;
  onSubmit: () => void;
};

export default function Step4({ onPrev, onSubmit }: Props) {
  return (
    <div className="page">
      <div className="container">
        {/* Header */}
        <DMVHeader />

        {/* Stepper */}
        <div className="card stepperCard">
          <div className="stepperRow">
            <StepDot done label="Personal Info" />
            <StepLine active />
            <StepDot done label="History" />
            <StepLine active />
            <StepDot done label="Preferences" />
            <StepLine active />
            <StepDot active number={4} label="Registration" />
          </div>
          <div className="stepperCaption">Step 4 of 4: Voter registration &amp; certification</div>
        </div>

        {/* Section G */}
        <fieldset className="fieldset">
          <legend className="legend">G. Voter Registration</legend>

          <div className="gIntro">
            Unless you decline, the information you have provided on this application will be used
            to register you to vote. If you do not meet the voter registration requirements listed
            below, or if you do not want to register to vote, you MUST decline.
          </div>

          <div className="gBox">
            <div className="gBoxTitle">To register to vote through the DMV, you must:</div>
            <ul className="gList">
              <li>Be a US Citizen</li>
              <li>
                Live in the District of Columbia. (You may not vote in an election in the District
                of Columbia unless you have lived in the District of Columbia for at least 30 days
                before the election in which you intend to vote.)
              </li>
              <li>
                Not claim voting residence or the right to vote in another state, territory, or
                country
              </li>
              <li>
                Be at least 16 years old. (You may pre-register at 16. You may vote in a primary
                election if you are at least 17 years old and you will be 18 years old by the next
                general election. You may vote in a general or special election if you are at least
                18 years old.)
              </li>
              <li>Not have been found by a court to be legally incompetent to vote</li>
            </ul>
          </div>

          <div className="gDeclineRow">
            <label className="checkLabel">
              <input type="checkbox" />
              <span className="gDeclineText">I decline. Do not register me to vote.</span>
            </label>
          </div>

          <div className="gSmallNote">
            If you decline, skip to Section H, Applicant Certification. Please note that if you
            decline but are eligible to register to vote, your information may be shared with the
            Board of Elections to update their records as provided in DC Official Code §1-1001.07b(a).
          </div>

          <div className="gDivider" />

          <div className="gPartyTitle">
            Party Registration. To vote in a primary election in the District of Columbia, you must
            be registered to vote in one of the following three (3) parties (Check ONE box below):
          </div>

          <div className="gPartyGroup">
            <label className="radioLabel gRadio">
              <input type="radio" name="party" value="Democratic Party" />
              <span>Democratic Party</span>
            </label>

            <label className="radioLabel gRadio">
              <input type="radio" name="party" value="DC Statehood Green Party" />
              <span>DC Statehood Green Party</span>
            </label>

            <label className="radioLabel gRadio">
              <input type="radio" name="party" value="Republican Party" />
              <span>Republican Party</span>
            </label>
          </div>

          <div className="gSmallNote">
            If you register as “No Party (independent)” or with another party not listed above, you
            may not vote in primary elections. If you do not choose a party, you will be registered
            as “No Party (independent).”
          </div>

          <div className="gPartyGroup">
            <label className="radioLabel gRadio">
              <input type="radio" name="party" value="No Party (independent)" />
              <span>No Party (independent)</span>
            </label>

            <div className="gOtherRow">
              <label className="radioLabel gRadio">
                <input type="radio" name="party" value="Other" />
                <span>Other (write party name here):</span>
              </label>
              <input className="gOtherInput" type="text" aria-label="Other party name" />
            </div>
          </div>

          <div className="gDivider" />

          <div className="gLineBlock">
            <div className="gLineLabel">
              If you need help with voting, please tell us what type of help you need (optional):
            </div>
            <input className="gLineInput" type="text" />
          </div>

          <div className="gLineBlock">
            <div className="gLineLabel">
              Address where you get your mail (if different from above):
            </div>
            <input className="gLineInput" type="text" />
          </div>

          <div className="gLineBlock">
            <div className="gLineLabel">
              Name and address on your last voter registration (include city and state if outside
              of DC):
            </div>
            <input className="gLineInput" type="text" />
          </div>

          <div className="gPollRow">
            <div className="gLineLabel">
              Would you like information on serving as a poll worker in the next election?
            </div>
            <div className="yesNo">
              <label className="radioLabel">
                <input type="radio" name="pollworker" value="Yes" />
                <span>Yes</span>
              </label>
              <label className="radioLabel">
                <input type="radio" name="pollworker" value="No" />
                <span>No</span>
              </label>
            </div>
          </div>

          <div className="gBold">Important Notices.</div>

          <div className="noticeBox">
            <div className="noticeText">
              Voter registration information is public, with the exception of full/partial social
              security numbers, dates of birth, email addresses, and phone numbers. If you decline
              to register to vote, your decision will be confidential. If you choose to register to
              vote, the agency at which your voter registration application is submitted will
              remain confidential and will be used only for your voter registration purposes.
              <br />
              <br />
              If you would like to make your residence and/or mailing address confidential, please
              contact the Board of Elections' Voter Services Division at 202-727-2525 or at
              voterservices@dcboe.org for more information.
              <br />
              <br />
              If you believe that someone has interfered with your right: a) to register to vote;
              b) to decline to register to vote; c) to privacy in deciding whether to register or in
              applying to register to vote; or d) to choose your own political party or other
              political preference, you may file a complaint with the Executive Director of the
              Board of Elections, 1015 Half Street, SE, Suite 750, Washington, DC 20003.
              <br />
              <br />
              If you do not receive a voter registration card within three weeks of completing this
              application, call the Board of Elections at 202-727-2525. You may also visit the Board
              of Elections' website at www.dcboe.org. For TTY assistance, call 711. Si necesita
              esta información en español, llame al 202-727-2525.
            </div>
          </div>
        </fieldset>

        {/* Section H */}
        <fieldset className="fieldset">
          <legend className="legend">H. Applicant Certification</legend>

          <div className="hText">
            I hereby certify, under penalty of perjury, that the information contained on this
            application is true and correct. If I am applying to register to vote, I swear or affirm
            that I meet each requirement listed in Section G. I understand that: a) any person using
            a fictitious name or address and/or knowingly making any false statement on this
            application is in violation of DC Law and subject to a fine of up to $1,000 and/or up to
            180 days imprisonment (DC Official Code 22-2405), and; b) any person who registers to
            vote or attempts to register and makes any false representations as to their
            qualifications for registering is in violation of DC Law and subject to a fine of up to
            $10,000 and/or up to 5 years imprisonment (DC Official Code 1-1001.14(a)).
          </div>

          <div className="hSigGrid">
            <SignaturePadField label="APPLICANT SIGNATURE" />
            <LineInput label="DATE" />
          </div>
        </fieldset>

        {/* Bottom employee/signature box */}
        <div className="employeeBox">
          <div className="empTopRow">
            <div className="empText">
              To confidentially report waste, fraud or abuse by a DC Government Agency or official,
              call the DC Inspector General at 1.800.521.1639
            </div>
            <div className="empRight">Form revised February 2025</div>
          </div>

          <div className="empSigGrid">
            <LineInput label="EMPLOYEE SIGNATURE" />
            <LineInput label="DATE" />
          </div>

          <div className="empBottom">
            Questions: Please visit our website at <b>dmv.dc.gov</b> or call 311 in DC or
            202.737.4404 outside the 202 area code.
          </div>
        </div>

        {/* Footer */}
        <div className="card footerCard">
          <button className="btnGhostActive" onClick={onPrev} type="button">
            ‹ Previous
          </button>

          <div className="pageIndicator">4 / 4</div>

          <button className="btnPrimary" onClick={onSubmit} type="button">
            Submit Application
          </button>
        </div>
      </div>
    </div>
  );
}

/** Helpers */
function StepDot({
  number,
  label,
  active,
  done,
}: {
  number?: number;
  label: string;
  active?: boolean;
  done?: boolean;
}) {
  return (
    <div className="stepDotWrap">
      <div className={done ? "stepDot done" : active ? "stepDot active" : "stepDot"}>
        {done ? "✓" : number}
      </div>
      <div className={active || done ? "stepLabel active" : "stepLabel"}>{label}</div>
    </div>
  );
}

function StepLine({ active }: { active?: boolean }) {
  return <div className={active ? "stepLine active" : "stepLine"} />;
}

function LineInput({ label }: { label: string }) {
  return (
    <div className="lineField">
      <div className="lineFieldLabel">{label}</div>
      <input className="lineFieldInput" type="text" aria-label={label} />
    </div>
  );
}