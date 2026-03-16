use axum::{routing::get, Router};
use std::sync::Arc;
use tokio::sync::mpsc;
use tokio::time::{sleep, Duration};

struct AppState {
    // Add shared state here
}

#[tokio::main]
async fn main() {
    println!("Starting Sentinel Protocol Watcher Service...");

    // Setup worker pool for vulnerability scanning
    let (tx, mut _rx) = mpsc::channel::<String>(100);

    // Spawn workers for scanning OSV.dev and GitHub Advisory APIs
    for id in 0..5 {
        let mut _rx_clone = tx.clone();
        tokio::spawn(async move {
            println!("Worker {} started for scanning", id);
            loop {
                // In production, process the channel messages
                sleep(Duration::from_secs(60)).await;
            }
        });
    }

    let shared_state = Arc::new(AppState {});

    let app = Router::new()
        .route("/health", get(|| async { "OK" }))
        .with_state(shared_state);

    let listener = tokio::net::TcpListener::bind("0.0.0.0:3000").await.unwrap();
    println!("Listening on port 3000");
    axum::serve(listener, app).await.unwrap();
}
