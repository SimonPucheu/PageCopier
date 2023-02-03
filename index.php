<?php
$key = '96c4e1e697eef80dccb83f4ff3030b35047b05b9a0172b88257d53514a8a495421e41189938742953056ab271227270445a3f0858513f3cebeba26294bc11b9c';
if (isset($_REQUEST['page']) && isset($_REQUEST['key'])  && isset($_REQUEST['ext']))
{
    if ($_REQUEST['key'] == $key)
    {
        $path = 'Pages/' . time() . '.' . $_REQUEST['ext'];
        file_put_contents($path, $_REQUEST['page']);
        echo('<a href="https://simonpucheu.000webhostapp.com/PageCopier/' . $path . '" target="_blank">Visit the copied page</a><br><a href="javascript:copy(\'https://simonpucheu.000webhostapp.com/PageCopier/' . $path . '\')">Copy the link adress</a><script>function copy (newClip) { navigator.permissions.query({name: "clipboard-write"}).then(result => {if (result.state == "granted" || result.state == "prompt") { navigator.clipboard.writeText(newClip).then(function() {}, function() {});}}); }</script>');
    }
}
?>