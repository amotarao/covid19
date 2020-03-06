import { ActionTree, Store } from 'vuex'
import { ActionContext } from 'vuex/types'
import { Context } from '@nuxt/types'
import { initialiseStores, newsStore } from '~/utils/storeAccessor'

export const state = () => ({})
export type RootState = ReturnType<typeof state>

const initializer = (store: Store<any>) => initialiseStores(store)

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit(
    _context: ActionContext<RootState, RootState>,
    server: Context
  ) {
    initializer(server.store)
    await newsStore.fetchItems()
  }
}

export const plugins = [initializer]
export * from '~/utils/storeAccessor'
