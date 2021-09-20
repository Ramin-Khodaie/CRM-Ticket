import { makeStyles } from "@material-ui/core";
import "./MessageHistory.css";

export default function MessageHistory({ msg }) {
  if (!msg) return null;
  return msg.map((history, i) => (
    <div key={i} className="message-history mt-3">
      <div className="send font-weight-bold text-secondary">
        <div className="sender">{history.sender}</div>
        <div className="date">
          {history.msgAt && new Date(history.msgAt).toLocaleString()}
        </div>
      </div>
      <div className="message">{history.message}</div>
    </div>
  ));
}
