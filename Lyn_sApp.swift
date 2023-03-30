//
//  Lyn_sApp.swift
//  Lyn's
//
//  Created by Use This on 2/24/23.
//

import SwiftUI

@main
struct Lyn_sApp: App {
    let persistenceController = PersistenceController.shared

    var body: some Scene {
        WindowGroup {
            ContentView()
                .environment(\.managedObjectContext, persistenceController.container.viewContext)
        }
    }
}
