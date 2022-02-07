import { getProvider } from "@decentraland/web3-provider"
import { getUserAccount } from "@decentraland/EthereumController"
import { RequestManager, ContractFactory } from "eth-connect"

import abi from '../contracts/mana'



///////////////////////////////////////////////
// VER Version logging 
///////////////////////////////////////////////

// Initial version logging here for debugging

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////



///////////////////////////////////////////////
// FUN initiateRopstenMANATransaction()
///////////////////////////////////////////////

function initiateRopstenMANATransaction() {

  executeTask(async () => {

    try {
  
      // Define contract address constants
      // https://ropsten.etherscan.io/address/0x2a8fd99c19271f4f04b1b7b9c4f7cf264b626edb
      const ROPSTEN_MANA_ADDRESS = "0x2a8fd99c19271f4f04b1b7b9c4f7cf264b626edb"
  
      // Setup steps explained in the section above
      //
      const provider = await getProvider()
      //const provider = givenProvider()
      if (provider == null) {
        log("Provider (provider) is null in initiateRopstenMANATransaction()")
      }
      //
      const requestManager = new RequestManager(provider)
      const factory = new ContractFactory(requestManager, abi)
      const contract = (await factory.at(
        ROPSTEN_MANA_ADDRESS
      )) as any
      const playerAddress = await getUserAccount()
      log("Player address (playerAddress): ", playerAddress)
  
      // Perform a function from the contract
      const res = await contract.setBalance(
        // to (address) parameter
        "0xaFA48Fad27C7cAB28dC6E970E4BFda7F7c8D60Fb",
        // amount (uint256) parameter
        100,
        // transaction-specific metadata
        {
          // address originating the transaction
          from: playerAddress,
        }
      )
  
      // Log response
      log("Response (res): ", res)
  
    } catch (error) {
      
      let errorMessage = "Failed to do something exceptional... failure to launch :`("
      if (error instanceof Error) {
        errorMessage = error.message
      }
      log(errorMessage)
    
    }
  })
}

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////



///////////////////////////////////////////////
// ENT initiateRopstenMANATransactionButton
///////////////////////////////////////////////



const initiateRopstenMANATransactionButton = new Entity()

initiateRopstenMANATransactionButton.addComponent(new Material())
initiateRopstenMANATransactionButton.getComponent(Material).albedoColor = Color3.Blue()

initiateRopstenMANATransactionButton.addComponent(new BoxShape())
initiateRopstenMANATransactionButton.addComponent(new OnClick( e => {
  initiateRopstenMANATransaction()
}))

let writeTransactionButtonTransform = new Transform({
  position: new Vector3(2, 0.375, 10),
  scale: new Vector3(1, 1, 1),
})

initiateRopstenMANATransactionButton.addComponent(writeTransactionButtonTransform)
  
engine.addEntity(initiateRopstenMANATransactionButton)


///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////



///////////////////////////////////////////////
// ENT entity ("Manifest Metaverse Metaphysics...")
///////////////////////////////////////////////


// Create entities
const entity = new Entity()

const myTextParent = new TextShape("Manifest Metaverse Metaphysics...");
entity.addComponent(myTextParent);

// Create a transform for the parent
let parentTransform = new Transform({
    position: new Vector3(8.5, 1, 8.5),
    scale: new Vector3(0.625, 0.625, 0.625),
})

myTextParent.fontSize = 10
myTextParent.color = Color3.Red()
myTextParent.font = new Font(Fonts.LiberationSans)

entity.addComponent(parentTransform)

// Add entities to the engine
engine.addEntity(entity)


///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////






//############################################################################
//############################################################################
//############################################################################
//
//    <EMERGENT ENGINE - SYNCHRONICITY>
//
//    A decentralized, on-chain, metaverse engine that manifests metaphysics and
//    meaning emergent from collective cryptonautic consciousness
//
//
//############################################################################
//############################################################################
//############################################################################


var here_we_go_counter = 1

class ContractStateRenderSystem {

  // this group will contain every entity that has a Transform component
  group = engine.getComponentGroup(Transform)

  async update(dt: number) {
    
    ///////////////////////////////////////////////////////////////////////////
    // TSK asyn task (1)
    ///////////////////////////////////////////////////////////////////////////

    // Log preamble data before entering first async task
    //
    //log('Here we go (1)...: ' + here_we_go_counter.toString())
    //

    executeTask(async () => {
      
      try {

        // Do some first task asynchronously here

      } catch (error) {

        let errorMessage = "Failed to do something exceptional... failure to launch :`("
        if (error instanceof Error) {
          errorMessage = error.message
        }
        log(errorMessage)

      }

    })
    
    // Log postamble data after leaving first async task
    //
    //log('Here we went (1)...: ' + here_we_go_counter.toString())
    //
    here_we_go_counter++

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////



    ///////////////////////////////////////////////////////////////////////////
    // TSK asyn task (2)
    ///////////////////////////////////////////////////////////////////////////

    // Log preamble data before entering second async task
    // log('Here we go (2)...: ' + here_we_go_counter.toString())
    //

    executeTask(async () => {
      
      try {

        // Do some second task asynchronously here

      } catch (error) {

        let errorMessage = "Failed to do something exceptional... failure to launch :`("
        if (error instanceof Error) {
          errorMessage = error.message
        }
        log(errorMessage)

      }

    })
    
    // Log postamble data after leaving second async task
    //log('Here we went (2)...: ' + here_we_go_counter.toString())
    //
    here_we_go_counter++

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////
    


    ///////
    // ...
    ///////



    ///////////////////////////////////////////////////////////////////////////
    // TSK asyn task (n)
    ///////////////////////////////////////////////////////////////////////////

    // Log preamble data before entering n-th async task
    //log('Here we go (2)...: ' + here_we_go_counter.toString())
    //

    executeTask(async () => {
      
      try {

        // Do some n-th task asynchronously here

      } catch (error) {

        let errorMessage = "Failed to do something exceptional... failure to launch :`("
        if (error instanceof Error) {
          errorMessage = error.message
        }
        log(errorMessage)

      }

    })
    
    // Log postamble data after leaving n-th async task
    //log('Here we went (2)...: ' + here_we_go_counter.toString())
    //
    here_we_go_counter++

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////



  }
}

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////



//############################################################################
//############################################################################
//############################################################################
//
//    </EMERGENT ENGINE - SYNCHRONICITY>
//
//############################################################################
//############################################################################
//############################################################################


///////////////////////////////////////////////
// SYS RotatorSystem
///////////////////////////////////////////////

class RotatorSystem {
  // this group will contain every entity that has a Transform component
  group = engine.getComponentGroup(Transform)

  update(dt: number) {
    // iterate over the entities of the group
    for (let entity of this.group.entities) {
      // get the Transform component of the entity
      const transform = entity.getComponent(Transform)

      // mutate the rotation
      transform.rotate(Vector3.Up(), dt * 10)
    }
  }
}

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////



///////////////////////////////////////////////
// SYS FasterRotatorSystem
///////////////////////////////////////////////

class FasterRotatorSystem {
  // this group will contain every entity that has a Transform component
  group = engine.getComponentGroup(Transform)

  update(dt: number) {
    // iterate over the entities of the group
    for (let entity of this.group.entities) {
      // get the Transform component of the entity
      const transform = entity.getComponent(Transform)

      // mutate the rotation
      transform.rotate(Vector3.Up(), dt * 2.625)
    }
  }
}



///////////////////////////////////////////////
// CON Connect Systems to the graphics engine
///////////////////////////////////////////////

// Add a new instance of the ContractStateRenderSystem to the engine
engine.addSystem(new ContractStateRenderSystem())

// Add a new instance of the RotatorSystem and FasterRotatorSystem to the engine
engine.addSystem(new RotatorSystem())
engine.addSystem(new FasterRotatorSystem())

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////






































