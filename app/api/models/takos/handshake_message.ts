import mongoose from "mongoose";
import tenantScope from "../plugins/tenant_scope.ts";

const handshakeMessageSchema = new mongoose.Schema({
  sender: { type: String, required: true },
  recipients: { type: [String], required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

handshakeMessageSchema.plugin(tenantScope, { envKey: "ACTIVITYPUB_DOMAIN" });

const HandshakeMessage = mongoose.models.HandshakeMessage ??
  mongoose.model("HandshakeMessage", handshakeMessageSchema);

export default HandshakeMessage;
export { handshakeMessageSchema };
