import { SheetService } from './services/sheetService'

import { getDayFormat } from './utils'

declare let global: any

global.createNewSpreadsheet = (): void => {
    const title = `New File ${getDayFormat()}`
    SheetService.createNewFile(title)
}
