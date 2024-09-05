export interface CodeStorage {
    lastKnownMenubarData: {
        menus: {
            File: {
                items: {
                    id: 'submenuitem.MenubarRecentMenu' | 'workbench.action.openWorkspace';
                    submenu: {
                        items: {
                            id: 'openRecentFolder' | 'openRecentFile';
                            label: string;
                        }[]
                    }
                }[]
            }
        }
    }
}