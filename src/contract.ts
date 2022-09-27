import { BigInt, log, ethereum } from "@graphprotocol/graph-ts"
import {
  Contract,
  Interaction,
  OrderInvalidated,
  PreSignature,
  Settlement,
  Trade,
  SettleCall,
} from "../generated/Contract/Contract"
import { ExampleEntity } from "../generated/schema"

export function handleSettle(call: SettleCall): void {
  let inputs = call.inputs;
  let tokens = inputs.tokens;
  for (let i = 0; i < tokens.length; i++) {
    log.info(`token[${i}] = {}`, [tokens[i].toHexString()]);
  }

  let interactions = inputs.interactions;
  log.info(`interactions.length {}`, [interactions.length.toString()]);
  for (let i = 0; i < interactions.length; i++) {
    log.info(`interactions[${i}].length {}`, [interactions[i].length.toString()]);
    for (let j = 0; j < interactions[i].length; j++) {
      let interaction = interactions[i][j];
      log.info(`interaction[${i}][${j}] {}, {}, {}`, [interaction.target.toHexString(), interaction.value.toString(), interaction.callData.toString()])
    }
  }
}
