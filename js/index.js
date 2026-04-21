  // Print function
        function printCV() {
            // Optional: You can add any pre-print logic here in the future
            window.print();
        }
        
        // Bonus: Keyboard shortcut (Ctrl/Cmd + P) already works, but we also support Enter key on button
        document.addEventListener('keydown', function(e) {
            if (e.key === "p" && (e.ctrlKey || e.metaKey)) {
                // Let browser handle default print
                return;
            }
        });
        
        // Make sure button works even if page is saved as .html
        console.log('%c✅ CV is fully working! Click "Print CV" button or press Ctrl+P (Cmd+P on Mac) to print.', 'color: #007bff; font-weight: bold;');
   