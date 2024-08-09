function convert() {
    const htmlInput = document.getElementById('htmlInput').value;
    const markdownOutput = document.getElementById('markdownOutput');
    
    // Basic conversion function
    function htmlToMarkdown(html) {
        let markdown = html;
        
        // Convert headings
        markdown = markdown.replace(/<h1>(.*?)<\/h1>/g, '# $1');
        markdown = markdown.replace(/<h2>(.*?)<\/h2>/g, '## $1');
        markdown = markdown.replace(/<h3>(.*?)<\/h3>/g, '### $1');
        markdown = markdown.replace(/<h4>(.*?)<\/h4>/g, '#### $1');
        markdown = markdown.replace(/<h5>(.*?)<\/h5>/g, '##### $1');
        markdown = markdown.replace(/<h6>(.*?)<\/h6>/g, '###### $1');
        
        // Convert paragraphs
        markdown = markdown.replace(/<\/?p>/g, '');
        
        // Convert links
        markdown = markdown.replace(/<a href="(.*?)">(.*?)<\/a>/g, '[$2]($1)');
        
        // Convert images
        markdown = markdown.replace(/<img src="(.*?)" alt="(.*?)" \/>/g, '![$2]($1)');
        
        // Convert bold
        markdown = markdown.replace(/<strong>(.*?)<\/strong>/g, '**$1**');
        
        // Convert italic
        markdown = markdown.replace(/<em>(.*?)<\/em>/g, '*$1*');
        
        // Convert underline
        markdown = markdown.replace(/<u>(.*?)<\/u>/g, '_$1_');
        
        return markdown;
    }

    markdownOutput.textContent = htmlToMarkdown(htmlInput);
}
