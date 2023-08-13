import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandsHelping,
  faBalanceScale,
  faHeartCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";

const CodeOfConduct = () => {
  return (
    <div className="code-of-conduct">
      <div className="left-column">
        <h1 style={{ color: "white" }}>Code of Conduct</h1>
        <p>
          This Code sets out the general standards of the British Falconers’
          Club which Members are expected to observe. Members are of course,
          required to observe the Club’s rules. The Code is used by the Council
          as a guideline in assessing any questions of “bringing falconry into
          disrepute” under the Club Rules:
        </p>
        <p>
          Falconry is the traditional sport of taking quarry in its natural
          state and habitat by means of trained hawks. The first duty of all
          Members is to respect and uphold this standard.
        </p>
        <ul>
          <li>
            2. A Member must uphold the highest standards of welfare, housing
            and feeding hawks. The hawk’s welfare must over-ride any other
            considerations.
          </li>
          <li>
            3. Members should always show due respect for all quarry and ensure
            that it is promptly and humanely dispatched.
          </li>
          <li>
            4. Members must always endeavour to promote the welfare and survival
            of hawks in the wild state.
          </li>
          <li>
            5. Members will ensure that hawks carry an appropriate working
            telemetry transmitters when flown.
          </li>
          <li>
            6. A Member should not obtain any hawk either for flying or breeding
            unless they are able to dedicate sufficient time each day to ensure
            the hawks welfare.
          </li>
          <li>
            7. Members must respect previously agreed arrangements, where known,
            for hawking over land when approaching landowners with a view to
            obtaining permission.
          </li>
          <li>
            8. Members are under an obligation to observe the laws and customs
            of the United Kingdom and of foreign countries with regard to the
            taking, possession, import and export of hawks, the taking of quarry
            species and the right of access to land. The Club fully supports the
            work of government agencies involved in the investigation and
            prosecution of individuals who may be guilty of criminal offences
            involving both domestic and wild hawks. Any Member found guilty in a
            court of law of any such offence will automatically be subject to
            investigation by a disciplinary committee convened under the Club
            Rules.
          </li>
          <li>
            9. Members are recommended to refer all requests from the media to
            the Club Press Officer or Council. Unwise publicity can bring
            falconry into disrepute and may embarrass the Club’s relations with
            welfare and protectionist organizations. Members should be aware
            that internet forums and chat rooms are not secure and may cover
            subjects prohibited by this code.
          </li>
          <li>
            10. A Member who broadcasts or publishes on internet forums or
            elsewhere, any item that breaches the Club code of conduct or is
            deemed defamatory to another Member may be subject to investigation
            under the Club rules.
          </li>
          <li>
            11. A Member who has good reason to believe that another Member is
            in breach of the code of conduct or of the Rules, shall report the
            matter in writing to the Director or their Regional Secretary. Where
            the law has been broken Members are reminded that they have a duty
            to report such occurrences to the appropriate authorities.
          </li>
          <li>
            12. Members will refrain from pursuing actions or behaving in such a
            manner that might be considered injurious to the Club, Officers and
            Members and their reputation.
          </li>
        </ul>
        <p>
          Participants asked to stop any harassing behavior are expected to
          comply immediately.
        </p>
      </div>
      <div className="right-column">
        <div className="square">
          <h2 style={{ color: "white" }}>BE RESPECTFUL</h2>
          <FontAwesomeIcon
            icon={faHandsHelping}
            size="2x"
            style={{ color: "white" }}
          />
          <p>
            Show respect to your peers. always be supportive and speak to others
            how you would want them to speak to you!
          </p>
        </div>
        <div className="arrow"></div>
        <div className="square">
          <h2 style={{ color: "white" }}>REPORT WHAT YOU SEE!</h2>
          <FontAwesomeIcon
            icon={faHeartCircleExclamation}
            size="2x"
            style={{ color: "white" }}
          />
          <p>
            If you believe that an animal is being abused then, please come
            forward and report it to a team member.
          </p>
        </div>
        <div className="arrow"></div>
        <div className="square">
          <h2 style={{ color: "white" }}>EQUALITY</h2>
          <FontAwesomeIcon
            icon={faBalanceScale}
            size="2x"
            style={{ color: "white" }}
          />
          <p>
            Treat all your peers with as you would anyone else! BFC is not a
            place of diversity and we believe in equality!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CodeOfConduct;
