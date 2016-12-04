export default function (kibana) {

  return new kibana.Plugin({

    uiExports: {
      visTypes: [
		'lugins/kibana-time-plugin/time'
      ]
    }

  });

};
