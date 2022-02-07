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
// GLB Global scene state
///////////////////////////////////////////////

var emergentEngineInstanceButtonState = -42

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////


///////////////////////////////////////////////
// FUN mutatePolygonEmergentEngineInstance()
///////////////////////////////////////////////

function mutatePolygonEmergentEngineInstance() {

  executeTask(async () => {

    try {
  
      // Define contract address constants
      // https://mumbai.polygonscan.com/address/0xfd0a1d32683080249F7dbB00b2FFE2140404215A
      const POLYGON_EMERGENT_ENGINE_INSTANCE_ADDRESS = "0xfd0a1d32683080249F7dbB00b2FFE2140404215A"
  
      // Setup steps explained in the section above
      //
      const provider = await getProvider()
      //const provider = givenProvider()
      if (provider == null) {
        log("Provider (provider) is null in mutatePolygonEmergentEngineInstance()")
      }
      //
      const requestManager = new RequestManager(provider)
      const factory = new ContractFactory(requestManager, abi)
      const contract = (await factory.at(
        POLYGON_EMERGENT_ENGINE_INSTANCE_ADDRESS
      )) as any
      const playerAddress = await getUserAccount()
      log("Player address (playerAddress): ", playerAddress)
  
      // Perform a function from the contract
      const res = await contract.setPosinaughtUsingCryptonautDelta(
        // _cryptonaut (address) parameter
        playerAddress,
        // _newPosinaut (uint) parameter
        84,
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
// ENT initiateMutationButton
///////////////////////////////////////////////



const initiateMutationButton = new Entity()

initiateMutationButton.addComponent(new Material())
initiateMutationButton.getComponent(Material).albedoColor = Color3.Blue()

initiateMutationButton.addComponent(new BoxShape())
initiateMutationButton.addComponent(new OnClick( e => {
  mutatePolygonEmergentEngineInstance()
}))

let writeTransactionButtonTransform = new Transform({
  position: new Vector3(2, 0.375, 10),
  scale: new Vector3(1, 1, 1),
})

initiateMutationButton.addComponent(writeTransactionButtonTransform)
  
engine.addEntity(initiateMutationButton)


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
    position: new Vector3(8.5, 3, 8.5),
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




///////////////////////////////////////////////
// ENT entity2 (getPosinaughtUsingCryptonautDelta(address _cryptonaut) function render)
///////////////////////////////////////////////


// Create entities
const entity2 = new Entity()

const myTextParent2 = new TextShape("UNINITIALIZED_EEI_RENDER");
entity2.addComponent(myTextParent2);

// Create a transform for the parent
let parentTransform2 = new Transform({
    position: new Vector3(8.5, 1.25, 8.5),
    scale: new Vector3(0.75, 0.75, 0.75),
})

myTextParent2.fontSize = 12
myTextParent2.color = Color3.Blue()
myTextParent2.font = new Font(Fonts.LiberationSans)

entity2.addComponent(parentTransform2)

// Add entities to the engine
engine.addEntity(entity2)


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

        // Get the global variable state for emergentEngineInstanceButtonState and update the connected entity

        entity2.getComponent(TextShape).value = emergentEngineInstanceButtonState.toString()

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
    
        // Define contract address constants
        // https://mumbai.polygonscan.com/address/0xfd0a1d32683080249F7dbB00b2FFE2140404215A
        const POLYGON_EMERGENT_ENGINE_INSTANCE_ADDRESS = "0xfd0a1d32683080249F7dbB00b2FFE2140404215A"
    
        // Setup steps explained in the section above
        //
        const provider = await getProvider()
        //const provider = givenProvider()
        if (provider == null) {
          log("Provider (provider) is null in executeTask(...)")
        }
        //
        const requestManager = new RequestManager(provider)
        const factory = new ContractFactory(requestManager, abi)
        const contract = (await factory.at(
          POLYGON_EMERGENT_ENGINE_INSTANCE_ADDRESS
        )) as any
        const playerAddress = await getUserAccount()
        log("Player address (playerAddress): ", playerAddress)
    
        // Perform a function from the contract
        const res = await contract.getPosinaughtUsingCryptonautDelta(
          // _cryptonaut (address) parameter
          playerAddress,
          // transaction-specific metadata
          {
            // address originating the transaction
            from: playerAddress,
          }
        )

        log("res: " + res)
        emergentEngineInstanceButtonState = res
    
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






































